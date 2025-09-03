import Locations from "./sections/locations/Locations";
import Navigation from "./sections/navigation/Navigation";
import { totals } from "./sections/data/progressData";
import Journals from "./sections/journals/Journals";
import Pictos from "./sections/pictos/Pictos";
import Weapons from "./sections/weapons/Weapons";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black/80 z-10">
      <main className="flex flex-col gap-[32px] items-start w-[60%]">
        {/* to do=> navigation becomes sticky tabs section with intersection observer to scroll to correct section onClick */}
        <div className="flex flex-col gap-4 w-full z-10">
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
          <Pictos
            title="Pictos"
            details="Total number of Pictos Found"
            total={totals.pictos}
          />
          <Weapons
            title="Weapons"
            details="Total Weapons Found"
            total={totals.weapons.allWeaponsTotal}
          />
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
    </div>
  );
}
