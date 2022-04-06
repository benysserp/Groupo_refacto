import React, {useState} from 'react'

export default function PublishPost() {

  const [toggle, setToggle] = useState(true)

  const handleToggle = () => {
    setToggle(!toggle)
    if(!toggle) {
      document.getElementById('publish-post').classList.add('h-0', 'opacity-0')
      document.getElementById('btn-publish').classList.add('hidden')
      document.getElementById('publish-post').classList.remove('h-60', 'opacity-100')
    } else {
      document.getElementById('publish-post').classList.remove('h-0', 'opacity-0')
      document.getElementById('publish-post').classList.add('h-60', 'opacity-100')
      document.getElementById('btn-publish').classList.remove('hidden')
    }
  }

  return (
    <form className='relative p-2 mt-4 ml-auto mr-auto bg-slate-800 flex flex-col space-y-2 w-11/12 rounded shadow-lg'>
       <label htmlFor='publish-post' className='font-medium text-slate-300'>Publier un nouveau statut</label>
        <div id='publish-post' className='transition-all duration-200 opacity-0 h-0 flex flex-col space-y-2 w-full'>
          <textarea id='publish-content' className='p-2 h-60 rounded outline-none resize-none'/>
          <div id='btn-publish' className='hidden flex'>
            <button className='transition-all duration-200 w-1/4 bg-slate-400 p-2 hover:bg-rose-400'><i className='fas fa-image' /></button>
            <button className='transition-all duration-200 w-3/4 bg-slate-200 p-2 hover:bg-emerald-400' type='submit'>Envoyer</button>
          </div>
        </div>
       <div className='absolute text-slate-300 -top-1 right-2 flex space-x-2'>
        <span onClick={handleToggle} className='p-1 hover:text-sky-400 rounded cursor-pointer'>{toggle ? <i className='fas fa-arrow-up' /> : <i className='fas fa-arrow-down' /> }</span>
       </div>
    
    </form>
  )
}
