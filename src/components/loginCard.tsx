import classNames from 'classnames';
import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import regex from '../utils/helper';
import petals from '../images/petals.svg';

interface FormDataProps {
    email: string;
    password: string;
}
const LoginCard = () => {
    const [formData, setFormData] = useState<FormDataProps>({
        email: "",
        password: ""
    })
    const [showPassword, setShowPassword] = useState(false)
    const [invalidInput, setInvalidInput] = useState<FormDataProps>({
        email: "",
        password: ""
    })
    const disableLogin = !formData?.email?.length || !formData?.password?.length ? true : false

    const changeHandler = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setFormData((prev: FormDataProps) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const togglePassword = () => { setShowPassword((prev) => !prev) }
    const submitHandler = (e: React.SyntheticEvent) => {
        e.preventDefault();
        toast.success("Login Successfully");
        setFormData({ email: "", password: "" })
    }

    const validator = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (!formData.email.match(regex.emailValidation)) {
            setInvalidInput({ email: "Email format is not valid", password: "" })
            return
        } else if (!formData.password.match(regex.strongPasswordValidation)) {
            setInvalidInput({ email: "", password: "Password should contain min. 6 letter, at least one symbol" })
            return
        }
        setInvalidInput({ email: "", password: "" })
        submitHandler(e)
    }
    return (
        <div className='p-5'>
            <div className='max-w-[500px] m-auto'>
                <div className='grid gap-2 place-items-center'>
                    <img src={petals} alt="" />
                    <h1 className='font-bold text-3xl'>Welcome <span className='text-[#08A593]'>Back!</span></h1>
                    <p className='text-[#667085]'>Glad to see you, Again!</p>
                </div>
                <form className='grid gap-2 mt-10'>
                    <div className='min-h-[80px]'>
                        <input type="email" name='email' placeholder='Enter your email' value={formData.email} onChange={changeHandler} className='border rounded-[10px] block p-4 w-full' />
                        <p className={classNames('text-red-500 text-sm px-4', !invalidInput?.email?.length ? 'invisible' : 'visible')}>{invalidInput.email}</p>
                    </div>
                    <div className='min-h-[80px] relative'>
                        <input type={showPassword ? "text" : "password"} name='password' placeholder='Enter your password' value={formData.password} onChange={changeHandler} className='border rounded-[10px] block p-4 w-full' />
                        {showPassword ? <AiFillEye onClick={togglePassword} className='cursor-pointer absolute top-6 right-5 text-[#BFBFBF]' /> : <AiFillEyeInvisible onClick={togglePassword} className='cursor-pointer absolute top-6 right-5 text-[#BFBFBF]' />}
                        <p className={classNames('text-red-500 text-sm px-4', !invalidInput?.password?.length ? 'invisible' : 'visible')}>{invalidInput.password}</p>
                    </div>
                    <div className='flex justify-end -mt-5'>
                        <a href='#' className='text-[#667085]/50'>Forgot Password?</a>
                    </div>
                    <button disabled={disableLogin} className={classNames('text-white shadow-buttonShadow rounded-[10px] block p-4 w-full mt-10', disableLogin ? "bg-black/50 cursor-not-allowed" : "bg-black cursor-pointer active:scale-95 active:duration-500")} onClick={disableLogin ? () => { } : validator}>Log In</button>
                </form>
                <p className='text-center text-[#667085] mt-16'>Don’t an account yet? <a href="#" className='text-[#08A593]'>Sign Up</a> </p>
            </div>
        </div>
    )
}

export default LoginCard