import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import json from "react-syntax-highlighter/dist/esm/languages/hljs/json";
import a11yDark from "react-syntax-highlighter/dist/esm/styles/hljs/a11y-dark";

SyntaxHighlighter?.registerLanguage("json", json);

const CodeView = ({ children }: { children: React.ReactNode }) => {
  const code = children?.toString();
  if (!code) return null;

  return (
    <SyntaxHighlighter language="json" style={a11yDark}>
      {code}
    </SyntaxHighlighter>
  );
};

export default CodeView;
