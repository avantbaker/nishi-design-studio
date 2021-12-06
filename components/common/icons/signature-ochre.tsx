import theme from 'styles/theme';
import { FC } from 'react';

type Props = {
  size?: number;
  fill?: string;
};

export const Signature: FC<Props> = ({
  size = 28,
  fill = theme.colors.black,
  ...rest
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 503.21 388.84"
  >
    <path
      className="cls-1"
      fill="#d78b32"
      fillRule="evenodd"
      d="M388.63,228.68c-.44-.74-4.36-1.17-4.69-.41a46.35,46.35,0,0,0-2.06,5.6,42.43,42.43,0,0,0-.93,5c-.39,2.39-.6,4.82-1.18,7.15a44.77,44.77,0,0,1-2.27,6.27,1.43,1.43,0,0,1-1.28.55,21.4,21.4,0,0,1-4.51-2.68c-2-1.77-3.76-3.86-5.66-5.78a12.88,12.88,0,0,1-3.59-6.95c-1.16-6.73-2.3-13.47-3.08-20.25-.65-5.61-.63-11.29-1.18-16.92a85.71,85.71,0,0,1-.24-10.63c.13-4.78-1.37-9.62-2.37-14.39a2.88,2.88,0,0,0-2.12-1.6c-1.77-.16-3.71-.27-5,1.46a20.77,20.77,0,0,0-1.65,2.43,23.64,23.64,0,0,0-2.49,5.14,39.75,39.75,0,0,0-.61,6.49c-.25,3.13-.54,6.26-.73,9.4a60.29,60.29,0,0,0-.09,6.16c.09,1.95.41,3.9.61,5.66a21,21,0,0,0-.65,2.88c-.13,1.45-.12,2.91-.11,4.37,0,4-.23,8,.17,12,.38,3.69-.49,7.07-1.46,10.5-.38,1.33-1.39,1.34-2.3.82a6.18,6.18,0,0,1-1.74-1.82c-2.28-3.26-2.82-7.08-3.36-10.87-1.3-9.1-2.45-18.22-3.88-27.3-1.08-6.77-2.38-13.53-3.84-20.23-.78-3.58-2-7.17-6.16-7.62a15.41,15.41,0,0,1-2.22,1.46c-.11,0-.64-.84-1.22-1.63a30.22,30.22,0,0,0-4.32,2.54,22.62,22.62,0,0,0-4.09,4.32c-1.19,1.7-1.87,3.75-3,5.52a37.89,37.89,0,0,0-5.33,15,4.23,4.23,0,0,1-.8-1.71c-.67-3.42-1.28-6.85-1.93-10.27-.93-4.82-1.87-9.65-2.82-14.46-.89-4.47-1.74-8.94-2.72-13.38-.74-3.31-1.71-6.57-2.51-9.87-1.07-4.37-2-8.76-3.11-13.13-.93-3.73-1.94-7.44-2.92-11.15-.94-3.53-1.81-7.08-2.86-10.58-1-3.19-2.2-6.31-3.19-9.5-.84-2.7-1.46-5.46-2.25-8.17-1.33-4.52-2.76-9-4.06-13.54-1.18-4.07-2.25-8.17-3.39-12.25a14.35,14.35,0,0,0-1.12-3.25,3.24,3.24,0,0,0-1.84-1.18c-1.26-.38-2.4.25-3.62.57A4.32,4.32,0,0,0,257.79,71a14,14,0,0,0-.67,9.17c.83,3.66,1.82,7.29,2.85,10.9.82,2.91,1.93,5.73,2.69,8.65s1.85,5.6,2.5,8.48c1.42,6.31,3.16,12.55,4.34,18.89.62,3.28,2.19,6.37,1.76,9.89a20.9,20.9,0,0,0,.4,5.44c.77,5.37,1.6,10.73,2.44,16.1.68,4.41,1.46,8.81,2.07,13.23.33,2.38.39,4.8.59,7.2.08,1,.28,2,.28,3,0,2.66-.14,5.31-.16,8,0,3.85.2,7.72-.07,11.56a61.17,61.17,0,0,1-4,17.37c-1.18,3.11-2.68,6.09-4,9.13l-.64-.15c-1.35-3.55-3-7-4-10.66-1.18-4.18-2.26-8.37-4.4-12.2a26.11,26.11,0,0,1-1.48-3.28c-.9-2.25-1.89-4.48-2.59-6.79-.56-1.86-2.45-3.62-.47-5.85.93-1-.55-4.91-1.84-5.57a1.69,1.69,0,0,0-1-.31c-2,.49-4.11.67-5.78,1.67-2.6,1.56-4.33,3.88-3.78,7.33.9,5.67,1.66,11.35,2.42,17a36.16,36.16,0,0,1,.39,5.68c-.08,2.37-.44,4.74-.68,7.1-.27,2.83-.53,5.66-.82,8.48a80.21,80.21,0,0,1-4.65,19.06c-.5,1.41-.71,2.92-1.23,4.32-1,2.76-2.23,5.46-3.25,8.23-.56,1.55-.72,3.26-1.36,4.77a1.81,1.81,0,0,1-3.34.1,22.78,22.78,0,0,1-1.79-3.6c-1.09-2.81-2.46-5.59-3-8.52-.88-4.6-1.17-9.32-1.75-14-.66-5.32-1.46-10.63-2-16-.28-2.75-.1-5.54-.26-8.31a66.85,66.85,0,0,0-.74-7.62c-.75-4.3-2.71-6.24-7.38-3.63-2.14,1.19-4,3-3.14,6.27.66,2.47.47,5.18.54,7.78s-.08,5.32.06,8c.14,2.81.43,5.62.81,8.41.77,5.75,1.62,11.48,2.5,17.21.1.65.91,1.29.82,1.85-.48,3.25.53,6.26,1.49,9.22a71.92,71.92,0,0,0,3.55,8.8,11.27,11.27,0,0,0,3,4,6.11,6.11,0,0,0,5.47,1.51c2.12-.42,3.86-.85,5.4-2.29a1.92,1.92,0,0,1,.85-.3,13.5,13.5,0,0,0,9.9-9.31c.83-2.41,1.11-5,2.14-7.34,1.44-3.19,1.34-6.84,3.28-9.84.22-.35-.08-1,0-1.49a5.7,5.7,0,0,1,.46-1.9c.51-1,1.48-1.82,1.72-2.84.93-3.84,1.64-7.74,2.44-11.62.26-1.24.54-2.48.81-3.72,1.32,2.5,2.06,5.09,3.2,7.48,1.39,2.91,1.35,5.34-.9,7.88-2.7,3-5.95,5.77-7.19,9.88-.57,1.9-1.37,3.88-1.32,5.8a26,26,0,0,0,2.77,10.14,18.26,18.26,0,0,0,3.86,6.14c1.34,1.24,3.4,1.78,5.21,2.4,2.12.73,3.53.09,4.93-1.7a2.74,2.74,0,0,1,1.52-1.09,9.37,9.37,0,0,0,8-7.71c.8-4.9-.09-9.72-.82-14.51-.55-3.59-1.7-7.08-2.47-10.65a3.28,3.28,0,0,1,.4-2.18c1.54-2.62,3.3-5.12,4.8-7.75a86.54,86.54,0,0,0,4.4-8.5,71.74,71.74,0,0,0,2.48-7.51c.83-2.69,1.73-5.36,2.37-8.09.54-2.32.76-4.71,1.12-7.07a1.09,1.09,0,0,1,.64.76c.8,5,1.76,9.93,2.34,14.93a174.28,174.28,0,0,0,5.58,28.91c.38,1.28.83,2.54,1.28,3.81,1.26,3.6,2.58,7.2,3.8,10.82.44,1.27.57,2.64,1,3.89.61,1.65,2.69,2.36,3.71,1.39a3.78,3.78,0,0,0,.52-4.2c-.78-1.07-.19-1.37.78-1.73a24.91,24.91,0,0,0,2.93,3,2.22,2.22,0,0,0,2.12,0,3.86,3.86,0,0,0,.94-2.58c-.13-1.92-.67-3.81-.92-5.72-.37-3-.6-5.95-1-8.92-.13-1.05-.7-2.05-.82-3.1-.42-3.62-.73-7.26-1.09-10.89-.11-1.06-.32-2.11-.33-3.17-.09-5-.37-10.1-.09-15.13.21-3.67.09-7.38,1.23-11,1-3.1,1.12-6.45,1.64-9.69a1.56,1.56,0,0,1,.33-.62c.68-.93,1.4-1.84,2.06-2.78.49-.7.9-1.45,1.35-2.18l.51.15c.78,3.16,1.8,6.28,2.29,9.48,1,6.28,1.59,12.62,2.42,18.92.5,3.84,1,7.69,1.71,11.5.88,4.79,1.91,9.56,3,14.32a15.34,15.34,0,0,0,1.52,4.24c1,1.77,1.64,3.69,3.76,4.91,1.24.72,2.31,2,3.83,2a19.25,19.25,0,0,0,4.42-1c.75-.21,1.85-.43,2.08-.95.78-1.78,2.6-1.8,3.83-2a6.74,6.74,0,0,0,5.51-4.13,3.09,3.09,0,0,1,.54-.94,1.41,1.41,0,0,1,.92-.34c.13,0,.28.43.39.68,1.13,2.54,1.93,5.31,3.48,7.55a49.76,49.76,0,0,0,6.45,7,23.13,23.13,0,0,0,5.15,4.14,9.41,9.41,0,0,0,10.23-.68c1.39-.95,2.54-2.31,4.52-2.1.5.06,1.1-.45,1.6-.78,1.57-1,2.17-2.84,3.28-4.13,2.65-3.08,3-6.6,3.26-10.28.11-1.89.07-3.78.15-5.67C390.72,235,390.44,231.68,388.63,228.68ZM264.49,266a6.11,6.11,0,0,1-1.08-.71,12,12,0,0,1-3.41-8c-.16-2.46.86-4.48,3-6.52.55,3.07,1.08,5.63,1.44,8.21.27,1.9.35,3.83.44,5.75A3.72,3.72,0,0,1,264.49,266Z"
    />
    <path
      className="cls-1"
      fill="#d78b32"
      d="M220.69,336.4c-1.73-4.33-3.33-8.71-5.07-13-1.36-3.36-3-6.64-4.29-10s-2.65-7-3.9-10.56c-1.67-4.7-3.26-9.44-4.92-14.15-.71-2-1.52-3.95-2.31-5.91s-1.76-3.94-2.48-6c-1.16-3.28-2.15-6.62-3.3-9.91-.79-2.25-1.85-4.42-2.58-6.69-1.18-3.68-2.16-7.43-3.29-11.14-1-3.44-2.19-6.85-3.23-10.29-.86-2.87-1.63-5.76-2.46-8.64-1-3.49-2.08-6.95-3-10.45-.78-2.91-1.42-5.85-2.12-8.78-1.52-6.3-3.12-12.57-4.51-18.89-.94-4.27-1.6-8.61-2.33-12.92-.87-5.1-1.69-10.2-2.51-15.31s-1.7-10.21-2.42-15.34c-.4-2.86-.54-5.75-.75-8.64-.3-4.21-.55-8.42-.82-12.63-.2-3.26-.44-6.52-.59-9.78s-.2-6.72-.29-10.08-.22-6.68-.23-10c0-3,.17-6,.18-9,0-3.23-.07-6.45-.11-9.68,0-3.72,0-7.45-.12-11.17-.08-3.29-.36-6.58-.38-9.88,0-6,.07-12,.1-18,0-4,0-8,0-12.37a8.4,8.4,0,0,1,1.32,1c2.67,3.54,5.45,7,7.94,10.68a87.14,87.14,0,0,1,6.16,10.22c1.82,3.68,3.1,7.61,4.65,11.42a39.09,39.09,0,0,1,2.51,13.32c.17,4,.16,8.32,5.33,9.73.55-1.09,1.13-2.27,1.73-3.45,1.09-2.14,2.61-4.17,3.18-6.44,1.08-4.34.15-8.74-.94-13a76.17,76.17,0,0,0-2.77-7.75,98.94,98.94,0,0,0-3.7-9.39c-1.89-3.8-4.15-7.43-6.35-11.07a73.84,73.84,0,0,0-5.88-9c-2.7-3.29-6-6.13-8.91-9.23-1.64-1.74-6.09-3-8.17-2A10.25,10.25,0,0,0,153,20.45c-.64,6.59-1,13.23-1.06,19.85-.1,6.25.24,12.51.4,18.76,0,1.93.1,3.86.19,5.79.12,2.66.26,5.32.4,8,0,.24.1.48.09.71-.16,2.89-.44,5.78-.47,8.68,0,4.6.1,9.21.16,13.82,0,1.9,0,3.79,0,5.69,0,4-.07,8,0,12,0,2.16.39,4.32.5,6.48.29,5.45.48,10.91.81,16.35.17,2.94.56,5.86.82,8.79.36,4,.5,8,1.06,12,.7,4.92,1.76,9.79,2.63,14.68s1.6,9.53,2.48,14.27c.78,4.15,1.69,8.27,2.52,12.4.78,3.89,1.38,7.82,2.33,11.67,1.11,4.49,2.54,8.9,3.78,13.36,1.48,5.32,2.88,10.66,4.39,16,1.42,5,2.87,10,4.43,14.94,1.45,4.65,3,9.26,4.6,13.88,1.27,3.77,2.51,7.55,3.9,11.28,1.29,3.49,2.85,6.87,4.13,10.36,1.87,5.11,3.56,10.29,5.42,15.41,1.18,3.26,2.65,6.42,3.76,9.7a69.17,69.17,0,0,0,6.05,13.9,10.45,10.45,0,0,1,.89,2.36c.33,1.07.58,2.16.93,3.22.63,1.87,1.3,3.72,2,5.57l-.63.35c-.77-.93-1.52-1.88-2.32-2.79-1.79-2-3.61-4.05-5.42-6.07a61.72,61.72,0,0,1-4.91-5.53c-2.39-3.41-5.15-6.56-7.11-10.29-2.22-4.2-5.54-7.74-7.67-12-1.77-3.59-3.84-7-5.73-10.55-1.65-3.07-3.22-6.2-4.87-9.28-1.31-2.45-2.82-4.81-4-7.32-1.67-3.49-3.12-7.08-4.7-10.61-.92-2.05-2.05-4-2.86-6.1-.92-2.33-1.46-4.81-2.39-7.14-1.31-3.25-2.88-6.38-4.22-9.62-1.23-3-2.2-6-3.45-9-1.72-4.11-3.69-8.13-5.39-12.26s-3.14-8.18-4.67-12.28c-1.75-4.68-3.46-9.37-5.19-14.05-.77-2.1-1.64-4.18-2.29-6.31-.95-3.08-1.62-6.25-2.67-9.29a2.73,2.73,0,0,0-2.92-2.13,6,6,0,0,0-4.18,1.55c-1.84,1.55-3.21,3.33-2.81,5.82.7,4.27,1.55,8.52,2.38,12.77.39,1.94.91,3.87,1.35,5.8,1.06,4.64,2.14,9.28,3.15,13.93.49,2.28.94,4.58,1.24,6.89.33,2.54.25,5.16.74,7.67.7,3.62,1.85,7.14,2.63,10.74,1.05,4.88,2,9.79,2.9,14.7s1.69,9.69,2.58,14.53c1.28,6.86,2.77,13.7,3.86,20.59,1.16,7.38,1.93,14.81,2.93,22.21.4,2.92,1,5.82,1.43,8.74.5,3.56.9,7.14,1.3,10.72a16.16,16.16,0,0,1-.11,1.95,40.39,40.39,0,0,0,0,4.92c.11,1.07.89,1.4,1.84.6.79-.66,1.89-1.17,2.31-2,1-1.93,2.66-2.08,4.41-2.14,1.55-.05,1.78-.89,1.65-2.16-.77-7.72-1.41-15.46-2.32-23.17-.89-7.52-2-15-3.1-22.5-.5-3.47-1.11-6.92-1.7-10.37-.67-3.85-1.38-7.69-2.07-11.54s-1.33-7.49-2-11.23c-.1-.53-.35-1-.47-1.55-.3-1.22-.56-2.46-.83-3.69l.62-.2a38.92,38.92,0,0,1,2.31,4.19c.66,1.58.89,3.35,1.55,4.93,2.07,5,4.25,9.91,6.4,14.84,1.32,3,2.58,6,4,9,1.79,3.59,3.79,7.08,5.66,10.63,3.25,6.16,6.42,12.37,9.74,18.49.72,1.32,2.12,2.25,2.94,3.54,1.27,2,2.22,4.22,3.47,6.24a83.09,83.09,0,0,0,6.38,9.69c4.8,5.79,9.89,11.35,15,16.9,2.32,2.53,4.85,4.88,7.37,7.21a24.36,24.36,0,0,0,4.19,3.16c.95.56,2.36,1.12,3.26.81,1.53-.52,1.51-2.29,1.62-3.72a4.27,4.27,0,0,0-.23-1.15l.46-.36a14.85,14.85,0,0,1,1.61,1.45,2.3,2.3,0,0,0,3.13.51,3.43,3.43,0,0,0,1.23-2.28,14.31,14.31,0,0,0-.23-3.31A57.16,57.16,0,0,0,220.69,336.4Z"
    />
    <path
      className="cls-1"
      fill="#d78b32"
      d="M203,188.14c1.34.35,2.06-.32,2.71-1.7s1.72-2.3,3.41-1.66a2.32,2.32,0,0,0,2.18-.78,30.25,30.25,0,0,0,2.25-4.22,4,4,0,0,0,.21-.92,11.2,11.2,0,0,0-.49-1.79c-1.42-3.1-2.85-6.2-4.37-9.23a4.23,4.23,0,0,0-1.78-2,2.75,2.75,0,0,0-2.44.17,12.68,12.68,0,0,0-3.32,3.37c-.79,1.26-1,3-1.63,4.41-1.52,3.74-1.08,7.58-.39,11.38C199.67,187.28,201.39,187.73,203,188.14Z"
    />
    <path
      className="cls-1"
      fill="#d78b32"
      d="M338.8,146.83c1.08,0,3-.58,3.08-1.17.42-2.13,2.05-1.64,3.25-1.95,2,.49,2.8-.53,3.56-1.92,1.15-2.11.06-3.95-.38-5.94-.49-2.17-3.85-3.82-5.88-4a6.07,6.07,0,0,0-5.07,1.86c-1.45,1.45-3.07,3.4-3.2,5.23-.15,2.18,1,4.53,2,6.66A3.35,3.35,0,0,0,338.8,146.83Z"
    />
  </svg>
);

export default Signature;
