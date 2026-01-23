export const SignIn = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-[600px] bg-white z-50 shadow-2xl
      transition-transform duration-300 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="p-6 border-b flex justify-between items-center">
        <h2 className="text-xl font-bold">Sign In</h2>
        <button onClick={onClose} className="text-2xl">×</button>
      </div>

      <div className="p-6">
        <input
          type="text"
          placeholder="Phone number or Email"
          className="w-full border p-3 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
        />
        <button className="w-full bg-[#fc8019] text-white py-3 rounded">
          Login
        </button>
      </div>
    </div>
  );
};
