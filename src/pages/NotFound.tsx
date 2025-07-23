import { Button } from "@/components/ui/button";
import { Heart, Home, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-soft flex flex-col items-center justify-center px-6">
      <div className="max-w-md mx-auto text-center space-y-8">
        {/* 404 Icon */}
        <div className="relative">
          <div className="text-8xl font-bold text-primary opacity-20">404</div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Heart className="h-16 w-16 text-primary animate-pulse-warm" />
          </div>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">
            Pagina non <span className="bg-gradient-warm bg-clip-text text-transparent">trovata</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Sembra che tu ti sia perso nel nostro mondo di connessioni. 
            Non preoccuparti, ti aiutiamo a ritrovare la strada del cuore.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button variant="warm" size="lg" className="w-full sm:w-auto">
              <Home className="mr-2 h-5 w-5" />
              Torna alla home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={() => window.history.back()}
            className="w-full sm:w-auto"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Torna indietro
          </Button>
        </div>

        {/* Helpful links */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Oppure esplora le nostre sezioni:
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            <Link to="/gruppi">
              <Button variant="ghost" size="sm">Gruppi</Button>
            </Link>
            <Link to="/storie">
              <Button variant="ghost" size="sm">Storie</Button>
            </Link>
            <Link to="/abbracci">
              <Button variant="ghost" size="sm">Abbracci</Button>
            </Link>
          </div>
        </div>

        {/* Quote */}
        <div className="pt-4">
          <p className="text-sm text-muted-foreground italic">
            "Ogni strada sbagliata è solo un'altra via per trovare quella giusta"
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
