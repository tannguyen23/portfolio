import ReactMarkdown from "react-markdown" 

export default function MarkdownRenderer({children}) {
  return (
    <div>
      <ReactMarkdown>{children}</ReactMarkdown>
    </div>
  ); 
}