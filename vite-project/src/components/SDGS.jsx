'use client'

import { useRef, useState, useEffect } from "react"

export default function SDGSection() {
  const scrollRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)

  const sdgCards = [
    {
      number: "01",
      title: "PARTNERSHIPS FOR THE GOALS",
      icon: "M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.12 0-.23-.01-.35.21-.26.4-.54.56-.84.37-.34.72-.72 1.05-1.12.28-.33.54-.68.78-1.04.24-.37.46-.76.66-1.16.17-.34.33-.69.47-1.05.13-.35.24-.71.34-1.08.09-.35.17-.71.23-1.07.06-.37.1-.75.13-1.13.02-.38.03-.75.03-1.13 0-.41-.02-.81-.06-1.21-.04-.4-.1-.79-.17-1.18-.08-.38-.18-.76-.3-1.13-.12-.37-.26-.73-.42-1.08-.16-.35-.34-.69-.54-1.02-.2-.33-.42-.65-.66-.95-.24-.3-.5-.58-.78-.84-.28-.26-.57-.5-.88-.73-.31-.22-.64-.42-.98-.6-.34-.18-.69-.33-1.05-.47-.36-.14-.73-.25-1.11-.34-.38-.09-.76-.16-1.15-.2-.39-.05-.79-.07-1.19-.07zm3 7c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm3-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z",
      bgColor: "bg-blue-700",
    },
    {
      number: "02",
      title: "QUALITY EDUCATION",
      icon: "M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z",
      bgColor: "bg-red-500",
    },
    {
      number: "03",
      title: "DECENT WORK AND ECONOMIC GROWTH",
      icon: "M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z",
      bgColor: "bg-rose-600",
    },
    {
      number: "04",
      title: "INDUSTRY, INNOVATION AND INFRASTRUCTURE",
      icon: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h2v7H7zm4-3h2v10h-2zm4 6h2v4h-2z",
      bgColor: "bg-orange-400",
    },
    {
      number: "05",
      title: "REDUCED INEQUALITIES",
      icon: "M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z",
      bgColor: "bg-pink-500",
    },
  ]

  const handleMouseDown = (e) => {
    setIsDragging(true)
    setStartX(e.pageX - scrollRef.current.offsetLeft)
    setScrollLeft(scrollRef.current.scrollLeft)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const x = e.pageX - scrollRef.current.offsetLeft
    const walk = (x - startX) * 2
    scrollRef.current.scrollLeft = scrollLeft - walk
  }

  useEffect(() => {
    const handleMouseLeave = () => setIsDragging(false)
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section className="w-full bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-3xl md:text-5xl font-bold mb-12 text-emerald-800">
          <span className="text-green-500">ICSIFT  2025</span> IS DEDICATED TO ADVANCING THE
           NATIONS SUSTAINABLE DEVELOPMENT GOALS (SDGS)
        </h1>
        
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-6 cursor-grab active:cursor-grabbing"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {sdgCards.map((card, index) => (
            <div 
              key={index}
              className={`flex-none w-[280px] ${card.bgColor} text-white rounded-lg shadow-lg transition-transform hover:scale-105`}
            >
              <div className="p-6 flex flex-col items-center justify-center min-h-[280px] text-center">
                <div className="text-4xl font-bold mb-2">{card.number}</div>
                <svg className="w-16 h-16 mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d={card.icon} />
                </svg>
                <div className="text-sm font-semibold">{card.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .overflow-x-auto {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

    