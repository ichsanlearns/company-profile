import { useEffect, useState } from "react";
import { TeamCard } from "../../../components/TeamCard";

interface TeamMember {
  name: {
    first: string;
    last: string;
  };
  email: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  location: {
    city: string;
    country: string;
  };
  phone: string;
  role: string;
}

const bakeryRoles = [
  "Ahli Roti",
  "Pembuat Roti",
  "Kasir",
  "Manajer Toko",
  "Pembuat Kue",
  "Staf Produksi",
  "Quality Control",
  "Pelayan Toko",
];

function TeamList() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://randomuser.me/api/?results=8");
        const data = await response.json();

        const membersWithRoles = data.results.map(
          (user: any, index: number) => ({
            ...user,
            role: bakeryRoles[index % bakeryRoles.length],
          })
        );

        setTeamMembers(membersWithRoles);
        setError(null);
      } catch (err) {
        setError("Gagal memuat data tim. Silakan coba lagi nanti.");
        console.error("Error fetching team members:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);
  if (loading) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mb-4"></div>
          <p className="text-gray-600 text-lg">Memuat data tim...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard
              key={index}
              name={`${member.name.first} ${member.name.last}`}
              role={member.role}
              email={member.email}
              location={`${member.location.city}, ${member.location.country}`}
              phone={member.phone}
              imageUrl={member.picture.large}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamList;
