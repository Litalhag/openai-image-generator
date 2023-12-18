import { useState } from 'react'

const Showcase = ({ onGenerateImage }) => {
  const [prompt, setPrompt] = useState('')
  const [size, setSize] = useState('medium')

  const onSubmit = (e) => {
    e.preventDefault()
    if (prompt === '') {
      alert('Please add some text')
      return
    }
    onGenerateImage(prompt, size)
  }

  return (
    <section className="showcase">
      <form id="image-form" onSubmit={onSubmit}>
        <h1>Describe An Image</h1>
        <div className="form-control">
          <input
            type="text"
            id="prompt"
            placeholder="Enter Text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>

        <div className="form-control">
          <select
            name="size"
            id="size"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </section>
  )
}

export default Showcase
