import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../configs/api';
import toast from 'react-hot-toast'
import {
  FilePenLineIcon,
  LoaderCircle,
  PencilIcon,
  PlusIcon,
  TrashIcon,
  UploadCloud,
  UploadCloudIcon,
  XIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import pdfToText from 'react-pdftotext'
const Dashboard = () => {

  const navigate = useNavigate();
  const { user, token } = useSelector(state => state.auth);

  const colors = [
    "#3a9809", // green
    "#d97706", // amber
    "#dc2626", // red
    "#0284c7", // blue
    "#16a34a"  // dark green
  ];
  const [allResumes, setAllResumes] = useState([]);
  const [showCreateResume, setShowCreateResume] = useState(false);
  const [showUploadResume, setShowUploadResume] = useState(false);
  const [title, setTitle] = useState('');
  // FIX: 'resume' se rename kiya — map wale 'resumeItem' se conflict tha
  const [uploadedFile, setUploadedFile] = useState(null);
  const [editResumeId, setEditResumeId] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const loadAllResumes = async () => {
    try {
      const { data } = await api.get(
        "/api/users/resumes",
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setAllResumes(data.resumes)
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error.message
      );
    }
  };

  /* ----- Create Resume ----- */
  const createResume = async (event) => {
    try {
      event.preventDefault();

      const { data } = await api.post(
        "/api/resumes/create",
        { title },
        {
          headers: {
            Authorization: token,
          },
        }
      );

      setAllResumes([...allResumes, data.resume]);

      setTitle(""); // reset title

      setShowCreateResume(false); // close modal

      navigate(`/app/builder/${data.resume._id}`);
    } catch (error) {
      // console.log(error.response?.data);
      toast.error(
        error?.response?.data?.message || error.message
      );
    }
  };

  /* ----- Upload Resume ----- */
  const uploadResume = async (event) => {
    event.preventDefault();
    setIsLoading(true)
    try {
      const resumeText = await pdfToText(uploadedFile);
      const { data } = await api.post(
        "/api/ai/upload-resume",
        { title, resumeText },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setTitle('');
      setUploadedFile(null);
      setShowUploadResume(false); //  Modal close 
      navigate(`/app/builder/${data.resumeId}`)
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
    setIsLoading(false)
  };


  /* ----- Edit Resume ----- */
  const editTitle = async (event) => {
    try {
       event.preventDefault();
       const { data } = await api.put(
          `/api/resumes/update`,{resumeId : editResumeId,resumeData:{title}},
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setAllResumes(allResumes.map(resume => resume._id === editResumeId ? {...resume , title} : resume))
        setTitle('')
        setEditResumeId('')
        toast.success(data.message)

    } catch (error) {
        toast.error(error?.response?.data?.message || error.message)
    }
  };

  /* ----- Delete Resume ----- */
  const deleteResume = async (resumeId) => {
    try {
      const confirm = window.confirm('Are you sure you want to delete this resume');
      if (confirm) {
        const { data } = await api.delete(
          `/api/resumes/delete/${resumeId}`,
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setAllResumes(allResumes.filter(resume => resume._id !== resumeId));
        toast.success(data.message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.message || error.message)
    }
  };


  // ── [] means sirf ek baar chalega (mount par)
  useEffect(() => {
    loadAllResumes();
  }, []);

  return (
    <div className='px-5'>
      <div className='max-w-7xl mx-auto px-6 py-8'>

        {/* heading  */}
        <p className='text-2xl font-medium mb-6 bg-linear-to-r from-slate-600 to-slate-700 bg-clip-text text-transparent sm:hidden'>
          Welcome, {user?.name}
        </p>

        {/* ── Do action buttons:  createResume  or uploadResume  ── */}
        <div className='flex gap-4'>

          {/* Create Resume button — click par showCreateResume = true */}
          <button
            onClick={() => setShowCreateResume(true)}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-400 group hover:border-indigo-600 hover:shadow-lg transition-all duration-300'>
            <PlusIcon className='size-11 p-2.5 bg-linear-to-br from-indigo-300 to-indigo-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-indigo-600'>Create Resume</p>
          </button>

          {/* Upload Resume button — click par showUploadResume = true */}
          <button
            onClick={() => setShowUploadResume(true)}
            className='w-full bg-white sm:max-w-36 h-48 flex flex-col items-center justify-center rounded-lg gap-2 text-slate-600 border border-dashed border-slate-400 group hover:border-orange-600 hover:shadow-lg transition-all duration-300'>
            <UploadCloudIcon className='size-11 p-2.5 bg-linear-to-br from-orange-300 to-orange-500 text-white rounded-full' />
            <p className='text-sm group-hover:text-orange-600'>Upload Existing</p>
          </button>
        </div>

        <hr className='border-slate-400 my-6 sm:w-77' />

        {/* ── Resume Cards Grid ── */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
          {allResumes.map((resumeItem) => {

            const baseColor = colors[allResumes.indexOf(resumeItem) % colors.length];

            return (
              // Card click hone par us resume ke builder page par jaao
              <button
                onClick={() => navigate(`/app/builder/${resumeItem._id}`)}
                key={resumeItem._id}
                className='relative w-full h-48 flex flex-col items-center justify-center rounded-lg gap-2 border group hover:shadow-lg transition-all duration-300'
                style={{
                  // Card ka background color dynamically set ho raha hai
                  background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                  borderColor: baseColor + '40' // border thodi transparent hai
                }}
              >
                <FilePenLineIcon
                  className='size-7 group-hover:scale-105 transition-all'
                  style={{ color: baseColor }}
                />

                {/* Resume ka title */}
                <p className='text-sm text-center px-2' style={{ color: baseColor }}>
                  {resumeItem.title}
                </p>

                {/* Card ke neeche last updated date */}
                <p
                  className='absolute bottom-1 text-[11px] text-center px-2'
                  style={{ color: baseColor + '90' }} // '90' se color thoda faded lagta hai
                >
                  Updated on {new Date(resumeItem.updatedAt).toLocaleDateString()}
                </p>

                {/* ── Hover par Delete aur Edit icons dikhte hain ──
                    e.stopPropagation() — icon click se card ka onClick na chale */}
                <div
                  onClick={e => e.stopPropagation()}
                  className='hidden group-hover:flex items-center'>


                  <TrashIcon
                    onClick={() => deleteResume(resumeItem._id)}
                    className='absolute top-2 right-2 size-6 p-1 hover:bg-white/70 rounded' />

                  <PencilIcon
                    onClick={() => {
                      setEditResumeId(resumeItem._id); // edit modal kholne ke liye ID set karo
                      setTitle(resumeItem.title);       // existing title input mein dikhao
                    }}
                    className='absolute top-10 right-2 size-6 p-1 hover:bg-white/70 rounded' />
                </div>
              </button>
            );
          })}
        </div>


        {/* ═══════════════════════════════════
            MODAL 1 — Naya Resume Banana
            showCreateResume = true hone par dikhega
        ════════════════════════════════════ */}
        {showCreateResume && (
          <form
            onSubmit={createResume}
            onClick={() => { setShowCreateResume(false); setTitle(''); }} // FIX: backdrop click par title bhi reset
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>

            {/* e.stopPropagation() — form box click hone par modal band na ho */}
            <div onClick={(e) => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Create a Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text" placeholder='Enter resume title'
                className='w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600 outline-none' required />
              <button className='w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors'>
                Create Resume
              </button>
              {/* X button — modal band karo aur title reset karo */}
              <XIcon
                onClick={() => { setShowCreateResume(false); setTitle(''); }}
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' />
            </div>
          </form>
        )}


        {/* ═══════════════════════════════════
            MODAL 2 — Existing Resume Upload Karna
            showUploadResume = true hone par dikhega
        ════════════════════════════════════ */}
        {showUploadResume && (
          <form
            onSubmit={uploadResume}
            onClick={() => { setShowUploadResume(false); setTitle(''); setUploadedFile(null); }}
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>

            <div onClick={(e) => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Upload Resume</h2>
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text" placeholder='Enter resume title'
                className='w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600 outline-none' required />

              <div>
                {/* Label click karne se neeche wala hidden file input trigger hoga */}
                <label htmlFor="resume-input" className='block text-sm text-slate-700'>
                  Select resume file
                  <div className='flex flex-col items-center justify-center gap-2 border group text-slate-400 border-dashed rounded-md p-4 py-10 my-4 hover:border-indigo-500 hover:text-indigo-700 cursor-pointer transition-colors'>
                    {/* File select hui hai toh name dikhao, warna upload icon */}
                    {uploadedFile ? (
                      <p>{uploadedFile.name}</p>
                    ) : (
                      <>
                        <UploadCloud className='size-14 stroke-1' />
                        <p>Upload resume</p>
                      </>
                    )}
                  </div>
                </label>

                {/* hidden file input — sirf PDF accept karta hai */}
                <input
                  onChange={(e) => setUploadedFile(e.target.files[0])} // pehli file lo
                  type="file" id='resume-input' accept='.pdf' hidden />
              </div>

              <button 
              disabled = {isLoading}
              className='w-full py-2 bg-indigo-600
               text-white rounded hover:bg-indigo-700 transition-colors flex justify-center items-center gap-2'>
                {isLoading && <LoaderCircle className='animate-spin size-4 text-white' />}
                {isLoading ? 'Uploading...' : ' Upload Resume'}
              </button>
              {/* X button — modal band karo aur title + file reset karo */}
              <XIcon
                onClick={() => { setShowUploadResume(false); setTitle(''); setUploadedFile(null); }}
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' />
            </div>
          </form>
        )}


        {/* ═══════════════════════════════════
            MODAL 3 — Resume Title Edit Karna
            editResumeId mein value hone par dikhega
        ════════════════════════════════════ */}
        {editResumeId && (
          <form
            onSubmit={editTitle}
            onClick={() => { setEditResumeId(''); setTitle(''); }}
            className='fixed inset-0 bg-black/70 backdrop-blur bg-opacity-50 z-10 flex items-center justify-center'>

            <div onClick={(e) => e.stopPropagation()} className='relative bg-slate-50 border shadow-md rounded-lg w-full max-w-sm p-6'>
              <h2 className='text-xl font-bold mb-4'>Edit Resume Title</h2>
              {/* Pehle se title filled hoga (pencil icon ne set kiya tha) */}
              <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                type="text" placeholder='Enter resume title'
                className='w-full px-4 py-2 mb-4 focus:border-indigo-600 ring-indigo-600 outline-none' required />
              <button className='w-full py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors'>
                Update
              </button>
              {/* X button — modal band karo aur title + editId reset karo */}
              <XIcon
                onClick={() => { setEditResumeId(''); setTitle(''); }}
                className='absolute top-4 right-4 text-slate-400 hover:text-slate-600 cursor-pointer transition-colors' />
            </div>
          </form>
        )}

      </div>
    </div>
  );
};

export default Dashboard;