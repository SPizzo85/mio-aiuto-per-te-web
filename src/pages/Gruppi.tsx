import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Clock, MapPin, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Gruppi = () => {
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
    },
    {
      id: 4,
      name: "Genitori Single",
      description: "Un supporto per chi cresce i propri figli da solo. Condividiamo sfide, gioie e consigli pratici.",
      members: 5,
      maxMembers: 6,
      category: "Famiglia",
      location: "Roma",
      nextMeeting: "Sabato alle 15:00",
      isJoinable: true
    },
    {
      id: 5,
      name: "Creativi in Cerca",
      description: "Per artisti, scrittori e creativi che vogliono condividere il loro percorso e trovare ispirazione.",
      members: 2,
      maxMembers: 5,
      category: "Creatività",
      location: "Online",
      nextMeeting: "Lunedì alle 21:30",
      isJoinable: true
    },
    {
      id: 6,
      name: "Dopo i 50",
      description: "Un cerchio per chi ha superato i 50 anni e vuole condividere saggezza ed esperienze di vita.",
      members: 4,
      maxMembers: 6,
      category: "Età Matura",
      location: "Napoli",
      nextMeeting: "Mercoledì alle 18:00",
      isJoinable: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Torna alla home
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">mio aiuto per te</span>
            </div>
            <Button variant="warm" size="sm">
              <Download className="mr-2 h-4 w-4" />
              Scarica App
            </Button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6 bg-gradient-soft">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Trova il tuo <span className="bg-gradient-warm bg-clip-text text-transparent">cerchio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ogni gruppo è un piccolo universo di persone che si sostengono a vicenda. 
            Trova quello che risuona con la tua storia.
          </p>
          <Button variant="warm" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Scarica l'app per unirti ai gruppi
          </Button>
        </div>
      </section>

      {/* Groups Grid */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {groups.map((group, index) => (
              <Card key={group.id} className="animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.1}s`}}>
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
                    {group.isJoinable ? "Unisciti con l'app" : "Cerchio completo"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button variant="story" size="lg">
              <Users className="mr-2 h-5 w-5" />
              Crea un nuovo gruppo con l'app
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Pronto a unirti a un <span className="bg-gradient-warm bg-clip-text text-transparent">cerchio</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Scarica l'app per partecipare ai gruppi, creare connessioni autentiche e condividere la tua storia.
          </p>
          <Button variant="warm" size="hero">
            <Download className="mr-2 h-6 w-6" />
            Scarica mio aiuto per te
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-background border-t">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="h-5 w-5 text-primary" />
            <span className="font-semibold">mio aiuto per te</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © 2024 mio aiuto per te. Connessioni autentiche, un abbraccio alla volta.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Gruppi;