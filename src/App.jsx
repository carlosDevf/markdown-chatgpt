import './App.css'
import markdownItAttrs from 'markdown-it-attrs'
import md from 'markdown-it'
import { useState } from 'react'

function App() {  

  const [mdContent, setMdContent] = useState("# Hello World")
  const mdMiddleWare = (contnent) => md().use(markdownItAttrs, {
    // optional, these are default options
    leftDelimiter: '{',
    rightDelimiter: '}',
    allowedAttributes: [] // empty array = all attributes are allowed
  })  
  .render(contnent)
  
  return (
  <>
    <h1 className="text-4xl font-bold bg-[#2c2d31] text-white pt-4 pb-4 text-center">Markdown Editor</h1>
    <main className='w-scree h-screen bg-[#15161a] text-white grid grid-cols-2'>
      <div id="editor" className='p-2'>
        <h3>Editor</h3>
        <textarea        
        onChange={(e => {          
          setMdContent(e.target.value)
          console.log(mdMiddleWare(e.target.value))
        })} id="editor" className="w-full h-full bg-[#2c2d31] text-white p-2"></textarea>
      </div>
      <div id="view" className='p-2'>
        <h3>View</h3>
        <div 
          id="preview" dangerouslySetInnerHTML={{__html: mdMiddleWare(mdContent)}} 
          className="w-full h-full bg-[#2c2d31] text-white p-2"></div>
      </div>
    </main>
  </>
  )
}

export default App
