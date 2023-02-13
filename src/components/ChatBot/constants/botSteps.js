
export const steps = [
  {
    id: "Greet",
    message: `Hello {name}, Welcome to your BotCaptain account`,
    trigger: "Ask for action"
  },
  {
    id: "Ask for action",
    message: "Please type your name?",
    trigger: "Waiting user input for name"
  },
  {
    id: "Waiting user input for name",
    user: true,
    trigger: "Asking options to eat"
  },
  {
    id: "Asking options to eat",
    message: "Hi {previousValue}, Glad to know you !!",
    trigger: "Done"
  },
  {
    id: "Done",
    message: "Have a great day !!",
    end: true
  }
];




// ANOTHER EXAMPLE 
// import React from "react";
// const BotRedirect = ({ url, message }) => {
//   return (
//     <div>
//       <a href={url} target="_blank">
//         {message}
//       </a>
//     </div>
//   );
// };


// export const steps = [
//   {
//     id: "1",
//     message: "Hello!",
//     trigger: "2"
//   },
//   {
//     id: "2",
//     message: "How can I help you?",
//     trigger: "3"
//   },
//   {
//     id: "3",
//     options: [
//       { value: 1, label: "Show ChatBot example", trigger: "4" },
//       { value: 2, label: "Show ChatBot API", trigger: "5" }
//     ]
//   },
//   {
//     id: "4",
//     component: (
//       <BotRedirect
//         message="See all examples in this page"
//         url="<https://lucasbassetti.com.br/react-simple-chatbot/#/docs/previous-value>"
//       />
//     ),
//     trigger: "2"
//   },
//   {
//     id: "5",
//     component: (
//       <BotRedirect
//         message="See chatbot API here"
//         url="<https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot>"
//       />
//     ),
//     trigger: "2"
//   }
// ];