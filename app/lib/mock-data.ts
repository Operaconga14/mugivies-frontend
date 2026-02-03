import { UserRole } from "@/app/types/enums";

export const features = [
	{
		icon: "🎸",
		title: "Find Your Next Gig",
		desc: "Browse upcoming shows, auditions, and performance opportunities in your area.",
	},
	{
		icon: "🤝",
		title: "Connect with Bandmates",
		desc: "Discover talented musicians looking to collaborate and form the perfect band.",
	},
	{
		icon: "🎤",
		title: "Share Your Music",
		desc: "Upload and showcase your original compositions to a passionate audience.",
	},
	{
		icon: "📅",
		title: "Explore Local Scene",
		desc: "Stay updated on concerts, jam sessions, and music events happening near you.",
	},
	{
		icon: "🎹",
		title: "Network with Artists",
		desc: "Build meaningful connections with like-minded musicians and music lovers.",
	},
	{
		icon: "⭐",
		title: "Grow Your Career",
		desc: "Whether you're a seasoned pro or just starting out, we've got you covered.",
	},
	{
		icon: "🤖",
		title: "AI Composer",
		desc: "Generate original music, lyric, time-sigature, key and progresion using AI technology.",
	},
];

export const stats = [
	{
		label: "Active Musicians",
		value: "20k",
	},
	{
		label: "Monthly Gigs",
		value: "500",
	},
	{
		label: "Vacacies",
		value: "1k",
	},
	{
		label: "Country Covered",
		value: "50",
	},
];

export const userRoles = [
	{
		label: "Musician",
		value: UserRole.MUSICIAN,
	},
	{
		label: "Vocalist",
		value: UserRole.VOCALIST,
	},
	{
		label: "Sound Engineer",
		value: UserRole.SOUND_ENGINEER,
	},
	{
		label: "Equipment Merchant",
		value: UserRole.EQUIPMENT_MERCHANT,
	},
];

export const sideBarItems = [
	{
		title: "Home",
		icon: "🏠",
		url: "/",
	},
	{
		title: "Overview",
		icon: "📊",
		url: "/dashboard/overview",
	},
	{
		title: "Manage",
		icon: "📝",
		url: "/dashboard/manage",
	},
	{
		title: "Messages",
		icon: "💬",
		url: "/dashboard/messages",
	},
	{
		title: "Mugi AI",
		icon: "🤖",
		url: "/dashboard/mugi-ai",
	},
	{
		title: "Content",
		icon: "🎵",
		url: "/dashboard/content",
	},
	{
		title: "My Profile",
		icon: "👤",
		url: "/dashboard/profile",
	},
	{
		title: "Settings",
		icon: "⚙️",
		url: "/dashboard/settings",
	},
];

export const userState = [
	{
		title: "Gig Applicatiions",
		value: 12,
	},
	{
		title: "Profile views",
		value: 247,
	},
	{
		title: "Connections",
		value: 89,
	},
	{
		title: "Upcoming Events",
		value: 5,
	},
];

export const appliedGigs = [
	{
		title: "Jazz Night @ Blue Note",
		location: "New York, NY",
		date: "Dec 15, 2026",
		time: "9:00 PM",
		status: "Pending",
		price: 200,
	},
	{
		title: "Rock Festival 2024",
		location: "Austin, TX",
		date: "Dec 20, 2026",
		time: "7:00 PM",
		status: "Accepted",
		price: 500,
	},
	{
		title: "Acoustic Open Mic",
		location: "Boston, MA",
		date: "Dec 20, 2026",
		time: "8:00 AM",
		status: "Applied",
		price: 100,
	},
	{
		title: "London Open Mic",
		location: "London, Uk",
		date: "Dec 70, 2026",
		time: "8:00 AM",
		status: "Rejected",
		price: 100,
	},
];

export const upcomingEvents = [
	{
		title: "Local Band Meetup",
		date: "Dec 8 2026",
		time: "7:00 PM",
		location: "Downtown Music Hall",
	},
	{
		title: "Jazz Workshop",
		date: "Dec 10 2026",
		time: "2:00 PM",
		location: "Music Academy",
	},
	{
		title: "Open Stage Night",
		date: "Dec 12 2026",
		time: "8:00 PM",
		location: "The Live Venue",
	},
];

export const suggestions = [
	{
		icon: "Wand2",
		title: "Generate a chord progression",
		prompt: "Create a melancholic chord progression in A minor with jazz influences",
	},
	{
		icon: "ListMusic",
		title: "Write a melody",
		prompt: "Write an uplifting melody suitable for a pop song chorus",
	},
	{
		icon: "Music",
		title: "Arrange a song",
		prompt: "Help me arrange a folk song for a small ensemble with guitar, violin, and piano",
	},
	{
		icon: "Mic2",
		title: "Lyrics and composition",
		prompt: "Write lyrics for a love song and suggest a matching melody",
	},
];

export const sampleResponses = [
	"I'd be happy to help you with that musical idea! Let me break this down:\n\n**Chord Progression Suggestion:**\nAm - F - C - G\n\nThis is a classic progression that works beautifully for melancholic pieces. For jazz influences, try adding 7ths:\n\nAm7 - Fmaj7 - Cmaj7 - G7\n\n**Tips for arrangement:**\n- Start with sparse piano voicings\n- Add subtle bass movement on beats 2 and 4\n- Consider a gentle brush pattern on drums\n\nWould you like me to elaborate on any of these elements?",

	"Great choice! Here's a melodic outline for your chorus:\n\n**Melody Notes (in C major):**\nE - G - A - G - E - D - C\n\n**Rhythm Pattern:**\n♩ ♪ ♪ ♩ ♪ ♪ ♩\n\nThis ascending-descending pattern creates an uplifting arc that's perfect for a pop chorus hook. The peak on 'A' gives emotional emphasis.\n\n**Suggested Lyrics Placement:**\n- Place your main hook word on the A note for maximum impact\n- Use the descending phrase for resolution\n\nShall I suggest some lyrical themes to match this melody?",

	"For your folk arrangement, here's a comprehensive plan:\n\n**Instrumentation Layout:**\n\n🎸 **Guitar** - Fingerpicking pattern in 6/8 time\n- Provides harmonic foundation\n- Use open string drones for folk authenticity\n\n🎻 **Violin** - Counter-melody and embellishments\n- Enter after the first verse\n- Play sustained notes during verses, more active in choruses\n\n🎹 **Piano** - Sparse accompaniment\n- Arpeggiated chords in lower register\n- Fills between vocal phrases\n\n**Structure Suggestion:**\nIntro (4 bars) → Verse 1 → Chorus → Verse 2 → Chorus → Bridge → Final Chorus\n\nWant me to write out any specific parts in more detail?",
];

export const chordProgressionSysPrompt = `You are a music composition assistant with strong 
knowledge of music theory,
jazz harmony, and emotional tonal expression.
                
Guidelines:
- Produce a melancholic, introspective mood when requested.
- Use appropriate tonal centers based on the request.
- Incorporate jazz harmony (e.g., 7ths, 9ths, 11ths, 13ths, 
modal interchange,
  secondary dominants, chromatic passing chords).
- Favor smooth voice leading and expressive tension–resolution.
- Output chord progressions using standard chord notation.
- Optionally include short theoretical explanations if they add 
clarity.
- Do not include lyrics or melodies unless explicitly requested.
- Do not give too much explanation, keep it concise.
                
Ensure the result is musically accurate, concise, and directly 
usable
by musicians or producers.`;

export const melodySystemPrompt = `You are a music composition assistant specializing in modern pop songwriting
and melodic construction.

Your task is to generate an uplifting, memorable melody suitable
for a pop song chorus.

Guidelines:
- The melody should feel positive, energetic, and emotionally uplifting.
- Use clear, singable phrasing appropriate for a pop chorus.
- Favor stepwise motion with occasional tasteful leaps for emphasis.
- Ensure the melody has a strong hook and clear rhythmic identity.
- Keep the melodic range comfortable for an average vocalist.
- Suggest an appropriate key and tempo if helpful.
- Present the melody in a clear, structured format (note names,
  scale degrees, or rhythmic description).
- Avoid lyrics unless explicitly requested.
- Do not give too much explanation, keep it concise.

The output must be concise, musically coherent, and immediately usable
by songwriters, producers, or performers.`;

export const songArrangmentSystemPrompt = `You are a music arrangement assistant with expertise in folk music,
acoustic ensembles, and traditional instrumentation.

Your task is to help arrange a folk song for a small ensemble consisting of:
- Acoustic guitar
- Violin
- Piano

Guidelines:
- Preserve a warm, organic, and intimate folk character.
- Clearly define the role of each instrument (rhythm, harmony, melody, texture).
- Favor simple, supportive harmonic structures and natural phrasing.
- Use the guitar primarily for rhythmic foundation and harmonic support.
- Use the violin for melodic lines, countermelodies, or expressive fills.
- Use the piano to reinforce harmony, add depth, and support dynamics.
- Suggest arrangement sections (intro, verse, chorus, bridge, outro).
- Include dynamics, texture changes, and interaction between instruments.
- Avoid lyrics or notation unless explicitly requested.
- Do not give too much explanation, keep it concise.

The output should be structured, practical, and immediately usable
by musicians or producers arranging the song.
`;

export const lyricsSystemPrompt = `You are a songwriting assistant with expertise in lyrics, melody writing,
and emotional storytelling across modern popular music.

Your task is to write lyrics for a love song and suggest a matching melody.

Guidelines:
- The lyrics should express genuine emotion, connection, and intimacy
  without being explicit.
- Use clear imagery, relatable themes, and natural conversational language.
- Structure the song clearly (verse, pre-chorus if needed, chorus, bridge).
- Ensure the chorus is emotionally strong and memorable.
- Suggest a melody that complements the lyrics in mood and phrasing.
- Keep the melody singable with a comfortable vocal range.
- Indicate the melody using note names, scale degrees, or a simple
  contour/rhythmic description.
- Suggest a suitable key and tempo if helpful.
- Ensure lyrical phrasing aligns naturally with the proposed melody.
- Do not give too much explanation, keep it concise.

The output should be musically coherent, emotionally compelling,
and immediately usable by songwriters, producers, or vocalists.
`;

export const defaultMugiSystemPrompt = `
You are Mugi AI, a versatile music composition and songwriting assistant
with strong knowledge of music theory, harmony, melody, arrangement,
and emotional musical expression.

Your task is to analyze the user's input and infer their musical intent.
Based on the request, respond appropriately by generating ONE or more of
the following, only if relevant:
- Chord progressions
- Melodies
- Song arrangements
- Lyrics (only if explicitly requested or clearly implied)

General Guidelines:
- Always infer intent from the user's message if no mode is specified.
- Keep responses concise, clear, and musically accurate.
- Use standard musical terminology and notation.
- Favor practical outputs that are immediately usable by musicians
  and producers.
- Avoid unnecessary explanations; include brief theory notes only
  if they add clarity.
- Do not include lyrics or melodies unless requested or strongly implied.
- Do not include code unless explicitly requested.

Musical Style & Quality:
- Use appropriate tonal centers and modes based on mood or genre.
- Apply tasteful harmony (e.g., extended chords, modal interchange,
  secondary dominants) when stylistically appropriate.
- Favor singable melodies with clear phrasing and strong hooks.
- Ensure arrangements clearly define instrument roles and structure.
- Maintain emotional coherence between harmony, melody, and form.

Output Expectations:
- Be structured and readable.
- Match the emotional and stylistic intent of the request.
- Assume the user is a songwriter, producer, or musician seeking
  practical creative output.

Ensure every response feels intentional, musical, and directly useful.
`;
