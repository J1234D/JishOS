import React, { useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { loadPyodide } from "pyodide";

function PythonIDE() {
  const [pyodide, setPyodide] = useState(null);
  const [code, setCode] = useState(
    localStorage.getItem("code") || "# Write Python code here...",
  );
  const [output, setOutput] = useState("");
  useEffect(() => {
    async function init() {
      try {
        const py = await loadPyodide();
        setPyodide(py);
      } catch (err) {
        console.error(err);
      }
    }

    init();
  }, []);
  const runCode = async () => {
    localStorage.setItem("code", code);
    if (!pyodide) return;
    let stdout = "";

    pyodide.setStdout({
      batched: (text) => {
        stdout += text + "\n";
      },
    });
    try {
      const result = pyodide.runPython(code);
      setOutput(stdout || String(result));
    } catch (err) {
      setOutput(err.toString());
    }
  };
  return (
    <div className="grid grid-cols-2">
      <Editor
        onChange={(value) => {
          setCode(value || "");
        }}
        height="90vh"
        defaultLanguage="python"
        value={code}
        theme="vs-dark"
        options={{
          fontSize: 14,
          minimap: { enabled: false },
        }}
      />
      <div className="bg-gray-900 rounded-xl">
        <div>
          <button
            className="relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            onClick={runCode}
            disabled={!pyodide}
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-3 py-1 text-lg font-medium text-white backdrop-blur-3xl">
              {pyodide ? "Run" : "Loading Python..."}
            </span>
          </button>
        </div>
        <h2 className="text-2xl text-white p-6">Output:</h2>
        <br />
        <div className="text-white text-sm">{output}</div>
      </div>
    </div>
  );
}

export default PythonIDE;
