import React, {useState} from "react";
import { Input, Button } from "antd";


const { TextArea } = Input;

function App() {
  const [initialText, setInitialText] = useState("");
  const [auxText, setAuxText] = useState("")
  const [modifiedText, setModifiedText] = useState("");
  const [edits, setEdits] = useState({
    "start": [],
    "end": [],
    "text": [],
  });

  const handleAuxTextChange = (e) => {
    if (initialText==="")
      {setInitialText(e.target.value);}
    setAuxText(e.target.value);
  }

  const handleTextChange = (e) => {
    setModifiedText(e.target.value);
  };

  const handleEditsChange = (start, end, text) => {
    let start_ = edits.start;
    let end_ = edits.end;
    let text_ = edits.text;

    start_.push(start);
    end_.push(end);
    text_.push(`"${text}"`);

    setEdits({
      "start": start_,
      "end": end_,
      "text": text_,
    })
  }

  function recordModifications() {
    const initialWords = auxText.split(" ");
    const modifiedWords = modifiedText.split(" ");
    
    let currentIndex = 0;
    let start = null;
    let end = null;
    let text = [];
  
    for (let i = 0; i < Math.max(initialWords.length, modifiedWords.length); i++) {
      if (initialWords[i] !== modifiedWords[i]) {
        if (start === null) {
          start = currentIndex;
        }
        end = currentIndex + (modifiedWords[i]?.length || 0);
        text.push(initialWords[i] || "");
      }
      currentIndex += (initialWords[i]?.length || 0) + 1;
      
    }

    handleEditsChange(start, end, text);
    setAuxText(modifiedText);
  }

  const refresh = () => {
    setInitialText("")
    setAuxText("")
    setModifiedText("")
    setEdits({
      start: [],
      end: [],
      text: [],
    });
  };



  return (
    <div style={{ maxWidth: "90vw", margin: "50px auto" }}>
      <h1 style={{ display: "inline-block", marginRight: 10 }}>Dataset Entry Creator</h1>
      <Button type="primary" onClick={refresh} style={{ display: "inline-block", background: "red"}}>
        Clear Entry
      </Button>
      <TextArea
        value={auxText}
        onChange={handleAuxTextChange}
        rows={2}
        placeholder="Enter initial text"
        style={{ height: 80, marginBottom: 10 }}
      />
      <TextArea
        value={modifiedText}
        onChange={handleTextChange}
        rows={4}
        placeholder="Modify the text here"
        style={{ height: 120, marginBottom: 10 }}
      />
      <Button
        type="primary"
        block
        style={{ marginBottom: 10 }}
        onClick={recordModifications}
      >
        Record Modification
      </Button>

      <h1>Results</h1>
      <TextArea
        value={initialText}
        readOnly
        rows={4}
        style={{ height: 120, marginBottom: 10 }}
      />
      <TextArea
        value={`"text":"${modifiedText}",\n"edits": {\n  "start": [${edits.start}],\n  "end": [${edits.end}],\n  "text": [${edits.text}]\n}`}
        readOnly
        rows={6}
        placeholder="Recorded modifications"
        style={{ height: 200, marginBottom: 10 }}
      />
    </div>
  );
}

export default App;
