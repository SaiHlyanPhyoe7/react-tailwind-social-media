
const Modal = ({handleFormDataChange,plusHandler,data,submitHandler,modal,plus}) => {
    return (
        <div className={`${plus ? 'scale-x-1':'scale-x-0'} h-screen w-full fixed top-0 left-0 bg-black bg-opacity-[0.5] flex justify-center items-center duration-500`}>
            <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="absolute flex justify-center items-center overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full justify-center items-center">
                <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                    {/*Modal content*/}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={plusHandler} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal">
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="py-6 px-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-indigo-600 dark:text-white">Post Something in this platform</h3>
                            <form onSubmit={submitHandler} className="space-y-6" action="src/components/main/Modal#">
                                <div>

                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                                    <input onChange={handleFormDataChange} name={"name"} type="text" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Post name?" required=""/>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Caption</label>
                                    <input onChange={handleFormDataChange} name={"caption"} type="text" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Post Caption?" required=""/>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How many likes?</label>
                                    <input onChange={handleFormDataChange} name={"like"} type="text" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Post Likes?" required=""/>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How many comment?</label>
                                    <input onChange={handleFormDataChange} name={"comment"} type="text" className="my-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Post comment?" required=""/>
                                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">How many post share?</label>
                                    <input onChange={handleFormDataChange} name={'share'} type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                           placeholder="Post share?" required=""/>
                                    <div className='mt-5'>
                                        <button className='bg-indigo-400 px-3 py-2 rounded-md text-white'>Add Caption</button>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Modal;









