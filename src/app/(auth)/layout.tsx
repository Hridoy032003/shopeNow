const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
  
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;