// might be same component as location=> see how they work out once complete

const JournalProgress = ({ name }: { name: string }) => {
  return (
    <div className="max-w-[8%] min-w-[8%] grow aspect-square border border-gray-500 rounded-md flex flex-col items-center justify-center text-center p-1">
      {name}
    </div>
  );
};

export default JournalProgress;
