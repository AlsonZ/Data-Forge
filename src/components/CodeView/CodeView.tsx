import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/prism/json";
import atomDark from "react-syntax-highlighter/dist/esm/styles/prism/atom-dark";

SyntaxHighlighter?.registerLanguage("json", json);

const CodeView = ({ children }: { children: React.ReactNode }) => {
  const code = children?.toString();
  if (!code) return null;

  return (
    <SyntaxHighlighter language="json" style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeView;
