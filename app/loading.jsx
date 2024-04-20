export default function Loading() {
    return (
      <main className="flex justify-center items-center h-screen bg-gray-100 dark:bg-black">
        <div className="text-center space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 animate-pulse dark:text-white">Loading...</h2>
          <p className="text-gray-600 dark:text-white">Patiently Waiting for Data</p>
          <div className="flex justify-center items-center">
            <div className="w-8 h-8 border-4 border-blue-500 border-dotted rounded-full animate-spin"></div>
          </div>
        </div>
      </main>
    );
  }
  