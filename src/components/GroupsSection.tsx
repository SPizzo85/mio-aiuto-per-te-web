import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Clock, MapPin } from "lucide-react";

const GroupsSection = () => {
  const groups = [
    {
      id: 1,
      name: "Storie di Resilienza",
      description: "Un cerchio per condividere come abbiamo superato momenti difficili e trovato forza interiore.",
      members: 4,
      maxMembers: 6,
      category: "Crescita Personale",
      location: "Online",
      nextMeeting: "Oggi alle 20:00",
      isJoinable: true
    },
    {
      id: 2, 
      name: "Nuovi Inizi",
      description: "Per chi sta iniziando un nuovo capitolo della vita. Condividiamo paure, speranze e sogni.",
      members: 6,
      maxMembers: 6,
      category: "Transizioni",
      location: "Milano",
      nextMeeting: "Domani alle 19:30",
      isJoinable: false
    },
    {
      id: 3,
      name: "Connessioni Autentiche", 
      description: "Uno spazio per parlare di relazioni, solitudine e il desiderio di connessioni più profonde.",
      members: 3,
      maxMembers: 5,
      category: "Relazioni",
      location: "Online",
      nextMeeting: "Venerdì alle 21:00",
      isJoinable: true
    }
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Trova il tuo <span className="bg-gradient-warm bg-clip-text text-transparent">cerchio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ogni gruppo è un piccolo universo di persone che si sostengono a vicenda. 
            Trova quello che risuona con la tua storia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {groups.map((group, index) => (
            <Card key={group.id} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <Badge variant="secondary" className="mb-2">
                    {group.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {group.members}/{group.maxMembers}
                  </div>
                </div>
                <CardTitle className="text-xl">{group.name}</CardTitle>
                <CardDescription className="text-sm leading-relaxed">
                  {group.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {group.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {group.nextMeeting}
                  </div>
                </div>
                <Button 
                  variant={group.isJoinable ? "warm" : "outline"} 
                  className="w-full"
                  disabled={!group.isJoinable}
                >
                  {group.isJoinable ? "Unisciti al cerchio" : "Cerchio completo"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="story" size="lg">
            <Users className="mr-2 h-5 w-5" />
            Crea un nuovo gruppo
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GroupsSection;