const Contact = () => {
    return (
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us Page</h1>
            <form action="">
                <input 
                    type="text" 
                    placeholder="Name"
                    className="border border-black m-2 p-2"
                />
                <input 
                    type="text" 
                    placeholder="Message"
                    className="border border-black m-2 p-2"
                />
                <button className="bg-blue-300 m-2 p-2 rounded-lg">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Contact;