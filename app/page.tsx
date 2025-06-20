import Locations from "./sections/locations/Locations";
import Navigation from "./sections/navigation/Navigation";
import Progress from "./sections/Progress";
import { totals } from "./sections/data/progressData";
import Journals from "./sections/journals/Journals";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] items-start w-[60%]">
        {/* page header goes here with a cover image=> maybe cover background for whole page */}
        {/* tabs with intersection observer to scroll to correct section */}
        <Progress>
          <Navigation />
          <Locations
            total={totals.locations.primary + totals.locations.sub}
            title="Locations"
            details="Locations visited and completed"
          />
          <Journals
            title="Journals"
            details="Total number of Journals Found"
            total={totals.journals}
          />
          {/* <Weapons /> */}
        </Progress>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
