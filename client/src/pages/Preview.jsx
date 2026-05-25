import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ResumePreview from "../components/ResumePreview/ResumePreview"
import Loader from '../components/Loader/Loader';
import { ArrowLeftIcon } from 'lucide-react';
import api from '../configs/api'
const Preview = () => {
  const { resumeId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [resumeData, setResumeData] = useState(null);
  const loadResume = async () => {
    try {
      const {data} = await api.get('/api/resumes/public/' + resumeId);
      setResumeData(data.resume)
    } catch (error) {
      console.log(error.message);
      
    }
    finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadResume();
  }, [])

  return resumeData ? (
    <div className='bg-slate-200'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accentColor}
          classes='py-4 bg-white' />
      </div>
    </div>
  ) : (
    <div>
      {isLoading ? <Loader /> : (
        <div className='flex flex-col items-center justify-center h-screen'>
          <p className='text-center text-6xl text-slate-400 font-medium'>Resume not found!</p>
          <a href="" className='mt-6  px-6 h-9 rounded-lg ring-indigo-400 text-sm flex items-center  ring-offset-2 ring-1 justify-center text-white bg-indigo-500 hover:bg-indigo-600 m-1 '>
            <ArrowLeftIcon className='mr-2 size-4' />
            go to home page
          </a>
        </div>
      )
      }
    </div>
  )
}

export default Preview