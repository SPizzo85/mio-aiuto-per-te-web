import { Button } from "@/components/ui/button";
import { Heart, Users, MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero-connection.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-soft px-6 py-12">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="h-8 w-8 text-primary animate-pulse-warm" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-warm bg-clip-text text-transparent">
              Abbracciamo
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
          <Button variant="warm" size="hero" className="animate-gentle-bounce">
            <Users className="mr-2 h-5 w-5" />
            Trova il tuo gruppo
          </Button>
          <Button variant="story" size="hero">
            <MessageCircle className="mr-2 h-5 w-5" />
            Condividi una storia
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <Users className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-lg font-semibold">Gruppi Intimi</h3>
            <p className="text-sm text-muted-foreground">
              Cerchi di 4-6 persone per condivisioni profonde e autentiche
            </p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <MessageCircle className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-lg font-semibold">Storie Vere</h3>
            <p className="text-sm text-muted-foreground">
              Racconta le tue esperienze, sfide e vittorie in uno spazio sicuro
            </p>
          </div>
          <div className="text-center space-y-2 animate-fade-in" style={{animationDelay: '0.6s'}}>
            <Heart className="h-12 w-12 text-primary mx-auto" />
            <h3 className="text-lg font-semibold">Abbracci Virtuali</h3>
            <p className="text-sm text-muted-foreground">
              Invia e ricevi supporto emotivo attraverso gesti di calore umano
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;