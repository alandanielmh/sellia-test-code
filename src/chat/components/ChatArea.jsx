import { Box, List, Stack, Chip, Typography } from "@mui/material";
import { ChatAreaItemStart } from "./ChatAreaItemStart";
import { ChatAreaItemEnd } from "./ChatAreaItemEnd";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const StackTime = ({ date }) => (
  <Stack direction="row" justifyContent="center" sx={{ py: 2, position: 'sticky', top: 0, zIndex: 2 }}>
    <Chip label={date} sx={{ backgroundColor: 'white', color: 'grey' }} />
  </Stack>
);

const formatDate = (date) => new Date(date).toLocaleDateString();

const MessageItem = ({ message }) => {
  const { type, typeUser, multimedia, text, createdAt } = message;
  const isClient = typeUser === 'Client';
  
  const renderMessage = () => {
    switch (type) {
      case 'text':
        return isClient ? <ChatAreaItemStart message={<Typography sx={{color: 'text.terniary'}}>{text}</Typography>} date={createdAt} /> : <ChatAreaItemEnd message={<Typography sx={{color: 'text.terniary'}}>{text}</Typography>} date={createdAt}/>;
      case 'image':
        return isClient ? <ChatAreaItemStart message={<img style={{width: '100%'}} src={multimedia.file} alt="User upload" />} date={createdAt} /> : <ChatAreaItemEnd message={<img src={multimedia.file} alt="User upload" />} date={createdAt}/>;
      case 'video':
        return isClient ? <ChatAreaItemStart message={<video style={{width: '100%'}} controls src={multimedia.file} />} date={createdAt} /> : <ChatAreaItemEnd message={<video style={{width: '60%'}} controls src={multimedia.file} />} date={createdAt}/>;
      case 'document':
        return isClient ? <ChatAreaItemStart message={<a href={multimedia.file} date={createdAt} target="_blank" rel="noopener noreferrer">Document</a>}  date={createdAt}/> : <ChatAreaItemEnd message={<a href={multimedia.file} target="_blank" rel="noopener noreferrer">Document</a>} date={createdAt}/>;
      default:
        return null;
    }
  };

  return renderMessage();
};

export const ChatArea = () => {


  const { active } = useSelector((state) => state.chat);
  useEffect(() => {
    const BoxElement = document.getElementById('boxChatArea'); 
    BoxElement.scrollTop = BoxElement.scrollHeight
  }, [active])
  
  const sortedMessages = [...active.chats].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
  
  const messageComponents = [];
  let lastDate = "";

  sortedMessages.forEach((message) => {
    const currentDate = formatDate(message.createdAt);
    
    if (currentDate !== lastDate) {
      messageComponents.push(<StackTime key={currentDate} date={currentDate} />);
      lastDate = currentDate;
    }

    messageComponents.push(<MessageItem key={message._id} message={message.message} />);
  });

  return (
    <Box sx={{ overflowY: "auto", flex: '1 0 0' }} id='boxChatArea'>
      <List sx={{ overflowY: 'auto', flex: '1 0 0' }} disablePadding>
        {messageComponents}
      </List>
    </Box>
  );
};
