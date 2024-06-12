export interface MessageProps {
  text: string;
  timestamp: string;
}

export interface FileData {
  file: File | null;
}

export interface ChatState {
  messages: MessageProps[];
  files: FileData[];
  previewUrl: string;
}
