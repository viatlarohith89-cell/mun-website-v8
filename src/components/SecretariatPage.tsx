import { Crown, Landmark, Megaphone, Palette, PenTool, FileText, Sparkles, Wrench } from 'lucide-react';

type SecretariatMember = {
  name: string;
  role: string;
  description: string;
  image?: string;
  icon: typeof Crown;
};

const leadership: SecretariatMember[] = [
  {
    name: 'Vedanshi.B',
    role: 'Secretary General',
    description: 'The Secretary General leads the secretariat, sets the vision for AWSMUN, and guides the conference towards an engaging and thoughtful diplomatic experience.',
    image: '/secretariat/9.png',
    icon: Crown,
  },
  {
    name: 'Shivani.D',
    role: 'Deputy Secretary General',
    description: 'The Deputy Secretary General supports the Secretary General and helps coordinate the conference team across committees and operations.',
    image: '/10.png',
    icon: Landmark,
  },
  {
    name: 'Lohitaksh.P',
    role: 'Deputy Director-General',
    description: 'The Deputy Director-General works closely with the secretariat to keep conference planning focused, organised, and ready for every stage of debate.',
    image: '/12.png',
    icon: Sparkles,
  },
  {
    name: 'Rohith.V',
    role: "Chargé d'Affaires",
    description: "The Chargé d'Affaires supports diplomatic coordination and helps create the atmosphere of professionalism, collaboration, and global dialogue at AWSMUN.",
    image: '/ROHITH_page-0001.jpg',
    icon: Landmark,
  },
  {
    name: 'Ruthvika',
    role: 'Chef de Cabinet',
    description: 'The Chef de Cabinet keeps the secretariat connected, supporting communication, coordination, and the smooth flow of work behind the conference.',
    image: '/secretariat/13.png',
    icon: PenTool,
  },
];

const underSecretaries: SecretariatMember[] = [
  {
    name: 'Srivatsa.V',
    role: 'USG – Public Relations',
    description: 'Public Relations brings the AWSMUN story to the wider community and helps build meaningful connections with delegates, schools, and guests.',
    image: '/secretariat/17.png',
    icon: Megaphone,
  },
  {
    name: 'Taneshka.K',
    role: 'USG – Social Media',
    description: 'Social Media captures the energy of AWSMUN and keeps the community informed through creative, timely, and engaging updates.',
    image: '/secretariat/19.png',
    icon: Sparkles,
  },
  {
    name: 'Divya.M',
    role: 'USG – Design',
    description: 'Design shapes the visual identity of AWSMUN, creating a polished and memorable experience across every communication channel.',
    image: '/secretariat/22.png',
    icon: Palette,
  },
  {
    name: 'Haswitha.K',
    role: 'USG – Policy',
    description: 'Policy keeps committees well-informed and prepared, ensuring every delegate has the research and guidance needed to engage meaningfully in debate.',
    image: '/16.png',
    icon: FileText,
  },
  {
    name: 'Jayatej',
    role: 'USG – Technology',
    description: 'Technology powers the digital side of AWSMUN, ensuring the conference experience is seamless, accessible, and well connected for every participant.',
    image: '/JAYATEJ_page-0001.jpg',
    icon: Wrench,
  },
];

function MemberCard({ member }: { member: SecretariatMember }) {
  const Icon = member.icon;

  return (
    <article className="group overflow-hidden rounded-2xl border border-corporate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-corporate-100">
        {member.image ? (
          <img
            src={member.image}
            alt={`${member.name}, ${member.role}`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 bg-corporate-950 px-6 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border border-corporate-300/40 bg-white/10 text-corporate-300">
              <Icon className="h-8 w-8" />
            </div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Profile coming soon</span>
          </div>
        )}
      </div>
      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-corporate-600">{member.role}</p>
        <h3 className="font-serif text-2xl font-bold text-corporate-950">{member.name}</h3>
        <p className="mt-3 text-sm leading-6 text-corporate-700">{member.description}</p>
      </div>
    </article>
  );
}

export function SecretariatPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-corporate-950 py-20 text-center text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-corporate-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Crown className="mx-auto mb-5 h-12 w-12 text-corporate-300" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-corporate-300">AWSMUN 2026</p>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">Our Secretariat</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-corporate-100">
            Meet the team bringing Edition IV to life through leadership, creativity, coordination, and a shared commitment to meaningful diplomacy.
          </p>
        </div>
      </section>

      {/* Leadership */}
      <section className="bg-corporate-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-corporate-600">Conference leadership</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-corporate-950">The Secretariat</h2>
            <p className="mt-3 leading-7 text-corporate-700">
              The leadership team creates the framework for a conference where every voice can be heard and every committee can thrive.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {leadership.map((member, index) => (
              <MemberCard key={`leadership-${index}`} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Under-Secretaries-General */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-corporate-600">The wider team</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-corporate-950">Under-Secretaries-General</h2>
            <p className="mt-3 leading-7 text-corporate-700">
              Our USGs bring the conference to life through communication, design, technology, policy, and community.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {underSecretaries.map((member, index) => (
              <MemberCard key={`usg-${index}`} member={member} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


export { SecretariatPage }