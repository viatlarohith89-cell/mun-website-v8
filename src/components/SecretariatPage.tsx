import { Crown, Landmark, Megaphone, Palette, PenTool, Shield, Sparkles, Wrench } from 'lucide-react';

type SecretariatMember = {
  name: string;
  role: string;
  description: string;
  image?: string;
  icon: typeof Crown;
  placeholder?: boolean;
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
    name: 'To be announced',
    role: 'Deputy Secretary General',
    description: 'The Deputy Secretary General supports the Secretary General and helps coordinate the conference team across committees and operations.',
    icon: Landmark,
    placeholder: true,
  },
  {
    name: 'To be announced',
    role: 'Deputy Secretary General',
    description: 'The Deputy Secretary General helps turn the conference vision into action, supporting teams and ensuring every delegate experience is carefully planned.',
    icon: Shield,
    placeholder: true,
  },
  {
    name: 'To be announced',
    role: 'Deputy Director General',
    description: 'The Deputy Director General works closely with the secretariat to keep conference planning focused, organised, and ready for every stage of debate.',
    icon: Sparkles,
    placeholder: true,
  },
  {
    name: 'To be announced',
    role: "Charge d'Affaires",
    description: 'The Charge d’Affaires supports diplomatic coordination and helps create the atmosphere of professionalism, collaboration, and global dialogue at AWSMUN.',
    icon: Landmark,
    placeholder: true,
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
    name: 'To be announced',
    role: 'USG – Technology',
    description: 'The Technology team supports the digital side of AWSMUN and helps make the conference experience smooth, accessible, and well connected.',
    icon: Wrench,
    placeholder: true,
  },
];

function MemberCard({ member }: { member: SecretariatMember }) {
  const Icon = member.icon;

  return (
    <article className={`group overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${member.placeholder ? 'border-dashed border-corporate-300 bg-corporate-50' : 'border-corporate-100 bg-white'}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-corporate-100">
        {member.image ? (
          <img src={member.image} alt={`${member.name}, ${member.role}`} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
        <h3 className="font-serif text-2xl font-bold capitalize text-corporate-950">{member.name}</h3>
        <p className="mt-3 text-sm leading-6 text-corporate-700">{member.description}</p>
      </div>
    </article>
  );
}

export function SecretariatPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-corporate-950 py-20 text-center text-white">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-corporate-600/30 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Crown className="mx-auto mb-5 h-12 w-12 text-corporate-300" />
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-corporate-300">AWSMUN 2026</p>
          <h1 className="font-serif text-4xl font-bold sm:text-5xl">Our Secretariat</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-corporate-100">Meet the team bringing Edition IV to life through leadership, creativity, coordination, and a shared commitment to meaningful diplomacy.</p>
        </div>
      </section>

      <section className="bg-corporate-50/50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-corporate-600">Conference leadership</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-corporate-950">The Secretariat</h2>
            <p className="mt-3 leading-7 text-corporate-700">The leadership team creates the framework for a conference where every voice can be heard and every committee can thrive.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{leadership.map((member, index) => <MemberCard key={`${member.role}-${index}`} member={member} />)}</div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-corporate-600">The wider team</p>
            <h2 className="mt-2 font-serif text-3xl font-bold text-corporate-950">Under-Secretaries-General</h2>
            <p className="mt-3 leading-7 text-corporate-700">Our USGs bring the conference to life through communication, design, technology, and community.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">{underSecretaries.map((member, index) => <MemberCard key={`${member.role}-${index}`} member={member} />)}</div>
        </div>
      </section>
    </div>
  );
}
