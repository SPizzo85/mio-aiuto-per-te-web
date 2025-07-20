import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Users } from "lucide-react";
import hugIcon from "@/assets/hug-icon.jpg";
import { useToast } from "@/hooks/use-toast";

const HugSection = () => {
  const { toast } = useToast();

  const sendRandomHug = () => {
    const hugMessages = [
      "🤗 Il tuo abbraccio ha raggiunto qualcuno che ne aveva bisogno!",
      "💝 Un abbraccio pieno di calore è stato inviato!",
      "🌟 Il tuo gesto di gentilezza illumina la giornata di qualcuno!",
      "💫 Un abbraccio magico è volato verso una persona speciale!"
    ];
    
    const randomMessage = hugMessages[Math.floor(Math.random() * hugMessages.length)];
    
    toast({
      title: randomMessage,
      description: "Continua a diffondere amore nel mondo ❤️",
    });
  };

  return (
    <section className="py-16 px-6 bg-background">
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
          
          <h2 className="text-3xl md:text-4xl font-bold">
            Il potere degli <span className="bg-gradient-warm bg-clip-text text-transparent">abbracci</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A volte un semplice abbraccio può cambiare la giornata di una persona. 
            In un mondo digitale, manteniamo viva la magia del contatto umano.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="animate-fade-in" style={{animationDelay: '0.2s'}}>
            <CardHeader className="text-center">
              <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Abbracci Ricevuti</CardTitle>
              <CardDescription>
                Questa settimana hai ricevuto 15 abbracci virtuali da persone che tengono a te
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <p className="text-sm text-muted-foreground">
                "Ogni abbraccio è un promemoria che non sei solo"
              </p>
            </CardContent>
          </Card>

          <Card className="animate-fade-in" style={{animationDelay: '0.4s'}}>
            <CardHeader className="text-center">
              <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
              <CardTitle className="text-xl">Abbracci Inviati</CardTitle>
              <CardDescription>
                Hai diffuso calore e supporto inviando 23 abbracci ad altre persone
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">23</div>
              <p className="text-sm text-muted-foreground">
                "La gentilezza è contagiosa, continua a diffonderla"
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="bg-gradient-soft border-none animate-fade-in-scale">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center space-y-4">
                <Users className="h-16 w-16 text-primary" />
                <h3 className="text-2xl font-semibold">Invia un abbraccio casuale</h3>
                <p className="text-muted-foreground text-center max-w-md">
                  Qualcuno da qualche parte nel mondo ha bisogno di sentire che qualcuno pensa a lui. 
                  Invia un abbraccio a caso e diffonditi il calore umano.
                </p>
                <Button 
                  variant="hug" 
                  size="hero" 
                  onClick={sendRandomHug}
                  className="animate-pulse-warm"
                >
                  <Heart className="mr-2 h-6 w-6" />
                  Invia abbraccio casuale
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-sm text-muted-foreground italic">
            "Un abbraccio è come un boomerang: torna sempre a chi lo ha dato"
          </p>
        </div>
      </div>
    </section>
  );
};

export default HugSection;