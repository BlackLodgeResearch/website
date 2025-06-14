export function Timeline() {
  const timelineEvents = [
    {
      year: "2018",
      title: "The Beginning",
      description: "MakerHub began as a small group of makers meeting in a garage, sharing tools and knowledge."
    },
    {
      year: "2019",
      title: "First Official Space",
      description: "We moved into our first official 1,000 sq ft space and started offering regular workshops."
    },
    {
      year: "2020",
      title: "Community Growth",
      description: "Despite challenges, our community grew to over 100 members with virtual workshops and projects."
    },
    {
      year: "2022",
      title: "Expansion",
      description: "Moved to our current 5,000 sq ft location with expanded equipment and dedicated work areas."
    },
    {
      year: "2024",
      title: "Education Program",
      description: "Launched our comprehensive education program and partnerships with local schools."
    },
    {
      year: "2025",
      title: "Looking Forward",
      description: "Expanding our community initiatives and launching new digital fabrication capabilities."
    }
  ];

  return (
    <div className="relative">
      {/* Center line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border" />
      
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div 
            key={event.year} 
            className={`relative flex items-center ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            {/* Content box */}
            <div className={`w-5/12 ${index % 2 === 0 ? "pr-8" : "pl-8"}`}>
              <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
                <span className="inline-block px-3 py-1 text-sm font-semibold bg-primary/10 text-primary rounded-full mb-2">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>
            </div>
            
            {/* Center point */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-primary border-4 border-background z-10" />
            
            {/* Spacer */}
            <div className="w-5/12" />
          </div>
        ))}
      </div>
    </div>
  );
}