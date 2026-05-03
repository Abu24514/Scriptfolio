import { Star } from 'lucide-react';

const BadgeAv = () => {

  const AVATARS = [
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
]

  return (
    <section className=' flex items-center gap-3'>
{/* Stacked Avatars */}
                        <div className="flex -space-x-3">
                            {AVATARS.map((src, i) => (
                                <img
                                    key={i}
                                    src={src}
                                    alt={`user-${i}`}
                                    className="size-9 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition-transform"
                                    style={{ zIndex: i + 1 }}
                                />
                            ))}
                        </div>

                        {/* Stars + Text */}
                        <div className="text-left">
                            <div className="flex items-center gap-0.5">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Star
                                        key={i}
                                        size={15}
                                        className="fill-indigo-500 text-transparent"
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-gray-400 mt-0.5">Used by 10,000+ users</p>
                        </div>
    </section>
  )
}

export default BadgeAv;