import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import hugIcon from "@/assets/hug-icon.jpg";
import { useToast } from "@/hooks/use-toast";

const Abbracci = () => {
  const { toast } = useToast();

  const sendRandomHug = () => {
    toast({
      title: "🤗 Scarica l'app per inviare abbracci veri!",
      description: "Potrai diffondere amore autentico nella community ❤️",
    });
  };

  const hugStats = [
    {
      number: "10,247",
      label: "Abbracci inviati oggi",
      description: "La community sta diffondendo tanto amore"
    },
    {
      number: "3,891",
      label: "Persone che hanno ricevuto supporto",
      description: "Nessuno è solo in mio aiuto per te"
    },
    {
      number: "15,432",
      label: "Momenti di connessione",
      description: "Ogni abbraccio crea un legame autentico"
    }
  ];

  const hugTypes = [
    {
      emoji: "🤗",
      name: "Abbraccio di Sostegno",
      description: "Per chi sta attraversando un momento difficile"
    },
    {
      emoji: "🎉",
      name: "Abbraccio di Celebrazione",
      description: "Per festeggiare le vittorie, grandi e piccole"
    },
    {
      emoji: "💝",
      name: "Abbraccio Casuale",
      description: "Un gesto spontaneo per illuminare la giornata di qualcuno"
    },
    {
      emoji: "🌟",
      name: "Abbraccio di Incoraggiamento",
      description: "Per dare forza a chi ne ha bisogno"
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

      {/* Hero Section */}
      <section className="py-16 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-12">
            <div className="relative inline-block">
              <img 
                src={hugIcon} 
                alt="Icona abbraccio"
                className="w-24 h-24 rounded-full mx-auto animate-gentle-bounce shadow-warm"
              />
              <div className="absolute -inset-2 bg-gradient-warm rounded-full opacity-20 animate-pulse-warm"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold">
              Il potere degli <span className="bg-gradient-warm bg-clip-text text-transparent">abbracci</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A volte un semplice abbraccio può cambiare la giornata di una persona. 
              In un mondo digitale, manteniamo viva la magia del contatto umano.
            </p>

            <Button variant="warm" size="lg">
              <Download className="mr-2 h-5 w-5" />
              Scarica l'app per inviare abbracci veri
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            L'impatto della <span className="bg-gradient-warm bg-clip-text text-transparent">gentilezza</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {hugStats.map((stat, index) => (
              <Card key={index} className="text-center animate-fade-in" style={{animationDelay: `${index * 0.2}s`}}>
                <CardContent className="pt-6">
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hug Types */}
      <section className="py-16 px-6 bg-gradient-soft">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tipi di <span className="bg-gradient-warm bg-clip-text text-transparent">abbracci</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hugTypes.map((hug, index) => (
              <Card key={index} className="text-center animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader>
                  <div className="text-4xl mb-2">{hug.emoji}</div>
                  <CardTitle className="text-lg">{hug.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">{hug.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
              <CardHeader className="text-center">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Abbracci nella Community</CardTitle>
                <CardDescription>
                  Ogni giorno migliaia di persone si sostengono attraverso abbracci virtuali
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">∞</div>
                <p className="text-sm text-muted-foreground">
                  "L'amore moltiplicato è l'unica matematica che conta"
                </p>
              </CardContent>
            </Card>

            <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
              <CardHeader className="text-center">
                <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-xl">Momenti Speciali</CardTitle>
                <CardDescription>
                  Gli abbracci creano connessioni autentiche e momenti indimenticabili
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">💫</div>
                <p className="text-sm text-muted-foreground">
                  "Ogni abbraccio è una piccola magia quotidiana"
                </p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-soft border-none animate-fade-in-scale">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Users className="h-16 w-16 text-primary" />
                <h3 className="text-2xl font-semibold">Inizia a diffondere amore</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Scarica l'app per unirti alla community più calorosa del web. 
                  Invia abbracci autentici e ricevi tutto l'amore di cui hai bisogno.
                </p>
                <Button 
                  variant="hug" 
                  size="hero" 
                  onClick={sendRandomHug}
                  className="animate-pulse-warm"
                >
                  <Heart className="mr-2 h-6 w-6" />
                  Prova un abbraccio virtuale
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-soft">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Pronto a ricevere e donare <span className="bg-gradient-warm bg-clip-text text-transparent">abbracci</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            In mio aiuto per te, ogni abbraccio conta. Unisciti a una community dove la gentilezza è contagiosa.
          </p>
          <Button variant="warm" size="hero">
            <Download className="mr-2 h-6 w-6" />
            Scarica mio aiuto per te
          </Button>
          <p className="text-sm text-muted-foreground italic">
            "Un abbraccio è come un boomerang: torna sempre a chi lo ha dato"
          </p>
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

export default Abbracci;