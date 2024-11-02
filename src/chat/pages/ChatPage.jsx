import { ChatLayout } from "../layout/ChatLayout"
import { ChatBoxView } from "../views"
import {  NothingSelectedView } from '../views';
import {  useSelector } from 'react-redux';

export const ChatPage = () => {

  const { active: activeChat } = useSelector(state => state.chat)

  return (
    <ChatLayout>
      {
        (!!activeChat ? <ChatBoxView /> : <NothingSelectedView />)
      }
    </ChatLayout>
  )
}