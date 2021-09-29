import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { StyledAuth } from 'styles/StyledScreen';
import { signup } from 'reducers/user';
import useInput from 'hooks/useInput';

const Signup = ({ setAuth }) => {
    const dispatch = useDispatch();

    const firstname = useInput('');
    const lastname = useInput('');
    const username = useInput('');
    const email = useInput('');
    const password = useInput('');
    const confirmPassword = useInput('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (
            !firstname.value.trim() || !lastname.value.trim() ||
            !username.value.trim() || !email.value.trim() ||
            !password.value.trim() || !confirmPassword.value.trim()
        ) {
            return toast.error("Please fill in all the fields");
        }

        if (password.value !== confirmPassword.value) {
            return toast.error("Password does not match");
        }

        if (username.value.length <= 3) {
            return toast.error("Username should be at least four characters long");
        }

        const re = /^[a-z0-9\x20]+$/i;
        if (!re.exec(username.value)) {
            return toast.error("Choose a better username");
        }

        const payload = {
            username: username.value,
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value,
            password: password.value,
        };

        const clearForm = () => {
            username.setValue('');
            firstname.setValue('');
            lastname.setValue('');
            email.setValue('');
            password.setValue('');
            confirmPassword.setValue('');
        };

        dispatch(signup({ payload, clearForm }));
    };

    return (
        <StyledAuth>
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input
                        type="text"
                        placeholder="firstname"
                        value={firstname.value}
                        onChange={firstname.onChange}
                    />
                    <input
                        type="text"
                        placeholder="lastname"
                        value={lastname.value}
                        onChange={lastname.onChange}
                    />
                </div>
                <input
                    type="text"
                    placeholder="username"
                    value={username.value}
                    onChange={username.onChange}
                />
                <input
                    type="email"
                    placeholder="email"
                    value={email.value}
                    onChange={email.onChange}
                />
                <div className="input-group">
                    <input
                        type="password"
                        placeholder="password"
                        value={password.value}
                        onChange={password.onChange}
                    />
                    <input
                        type="password"
                        placeholder="confirm"
                        value={confirmPassword.value}
                        onChange={confirmPassword.onChange}
                    />
                </div>
                <div className="action input-group">
                    <span className="pointer" onClick={() => setAuth('LOGIN')}>
                        Sign In Instead
                    </span>
                    <button>Sign Up</button>
                </div>
            </form>
        </StyledAuth>
    );
}

export default Signup;