import { useNavigate } from "react-router-dom";

function Singup() {
    const navigator = useNavigate();
    function handleSignup() {
        console.log("Signup");
        navigator('/about')
    }
    return (
        <>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                type="text"
                                id="name"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                            />
                        </div>
                        <button
                            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                            type="submit"
                            onClick={handleSignup}
                        >
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Singup;