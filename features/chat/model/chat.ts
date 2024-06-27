// 채팅방 리스트
export interface ChatRoomProps {
  resultCode: string;
  message: string;
  data: Room[];
}

export interface Room {
  roomId: number;
  title: string;
  roomType: string;
  loginId: string;
  lastMessage: string;
  unreadMsgNumber: number;
}

// 채팅방 유저 리스트
export interface ChatUserListProps {
  data: User[];
}

export interface User {
  id: number;
  loginid: string;
  name: string;
  birthDate: string;
  gender: string;
  email: string;
  role: string;
  companyCode?: string;
  state: string;
  profile: string;
}
