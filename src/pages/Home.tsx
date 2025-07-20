import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle, Download, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-connection.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="bg-background/80 backdrop-blur-sm border-b sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">mio aiuto per te</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link to="/gruppi" className="text-muted-foreground hover:text-primary transition-colors">Gruppi</Link>
              <Link to="/storie" className="text-muted-foreground hover:text-primary transition-colors">Storie</Link>
              <Link to="/abbracci" className="text-muted-foreground hover:text-primary transition-colors">Abbracci</Link>
              <Button variant="warm" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Scarica App
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-soft px-6 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Heart className="h-8 w-8 text-primary animate-pulse-warm" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-warm bg-clip-text text-transparent">
                mio aiuto per te
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Trova il tuo cerchio di persone speciali. Condividi storie autentiche, 
              ricevi abbracci virtuali e crea connessioni che scaldano il cuore.
            </p>
          </div>

          <div className="relative">
            <img 
              src={heroImage} 
              alt="Persone che si connettono e condividono storie"
              className="rounded-3xl shadow-warm max-w-full h-auto mx-auto animate-fade-in-scale"
            />
            <div className="absolute inset-0 bg-gradient-warm opacity-10 rounded-3xl"></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/gruppi">
              <Button variant="warm" size="hero" className="animate-gentle-bounce">
                <Users className="mr-2 h-5 w-5" />
                Trova il tuo gruppo
              </Button>
            </Link>
            <Link to="/storie">
              <Button variant="story" size="hero">
                <MessageCircle className="mr-2 h-5 w-5" />
                Condividi una storia
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Link to="/gruppi" className="text-center space-y-2 animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.2s'}}>
              <Users className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Gruppi Intimi</h3>
              <p className="text-sm text-muted-foreground">
                Cerchi di 4-6 persone per condivisioni profonde e autentiche
              </p>
            </Link>
            <Link to="/storie" className="text-center space-y-2 animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.4s'}}>
              <MessageCircle className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Storie Vere</h3>
              <p className="text-sm text-muted-foreground">
                Racconta le tue esperienze, sfide e vittorie in uno spazio sicuro
              </p>
            </Link>
            <Link to="/abbracci" className="text-center space-y-2 animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: '0.6s'}}>
              <Heart className="h-12 w-12 text-primary mx-auto" />
              <h3 className="text-lg font-semibold">Abbracci Virtuali</h3>
              <p className="text-sm text-muted-foreground">
                Invia e ricevi supporto emotivo attraverso gesti di calore umano
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Scarica <span className="bg-gradient-warm bg-clip-text text-transparent">mio aiuto per te</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Porta le connessioni autentiche sempre con te. L'app sarà presto disponibile su tutti i dispositivi.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="outline" size="lg" disabled className="w-full sm:w-auto">
              <Smartphone className="mr-2 h-5 w-5" />
              App Store (Presto disponibile)
            </Button>
            <Button variant="outline" size="lg" disabled className="w-full sm:w-auto">
              <Smartphone className="mr-2 h-5 w-5" />
              Google Play (Presto disponibile)
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground">
            Registrati per essere notificato quando l'app sarà disponibile
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-gradient-soft border-t">
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

export default Home;