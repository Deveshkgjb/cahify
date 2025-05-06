import React,{ useState} from'react'
function Login(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [submitted, setSubmited]=useState(false);
    const handleSubmit=(e)=>{
        e.preventDefault();
  setSubmited(true);
  setEmail('');
  setPassword('');

  setTimeout(()=>{
    setSubmited(false);
  },200)
    }; 
    return(
        <div className="min-h-screen  bg-red-100 flex items-center justify-center">
            <div className='bg-black p-8 rounded-lg shadow-lg w-full max-w-md'>
            <h2 className='text-2xl font-bold bg-white mb-6'>Login to  your account</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <div>
                <label  className="block text-white-700 bg-white mb-1">Email</label><br />
                <input type="Email" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-grey-300 rounded-lg bg-white focus:outline-none focus:ring2 focus:ring-blue-500 "
                placeholder="enter your Email" />
                </div>
                <div>
                <lable classame="block text-white-700 bg-white mb-1">Email</lable>focu
                <input type="Password" 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}

                className="w-full px-4 py-2 border border-grey-300 rounded-lg bg-white focus:outline-none focus:ring2 focus:ring-blue-500 "
                placeholder="enter your Password" 
                required
                />
                </div>
                <div className="flex item-center justify-between text-sm">
                    <lable className="flex item-center text-white">
                    <input type="checkbox"
                    className='from-checkbox mr-2' />
                    Remember me
                    </lable>

                </div>
                <button 
                    type='submit'
                    className='w-full bg-blue-600 text-white py-2 px-2 rounded-lg hover:bg-blue-700 transition duration-200'
                    >
                    login

                    </button>

                    {submitted && (
                      <p className="text-green-500 text-sm mt-3">
                       ✅ Your data has been submitted successfully!
                     </p>
                      )}
                
               
            

            </form>
            </div>
           


        </div>
    );
}
export default Login