import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StoriesSection = () => {
  const { toast } = useToast();

  const stories = [
    {
      id: 1,
      title: "Il coraggio di ricominciare",
      preview: "Dopo anni di paura, ho deciso di lasciare un lavoro che mi faceva male. Non sapevo cosa aspettarmi, ma...",
      author: "Maria",
      timeAgo: "2 ore fa",
      hugs: 12,
      responses: 8,
      category: "Crescita"
    },
    {
      id: 2,
      title: "Quando l'amicizia salva",
      preview: "Stavo attraversando il periodo più buio della mia vita quando una chiamata inaspettata ha cambiato tutto...",
      author: "Luca",
      timeAgo: "5 ore fa", 
      hugs: 23,
      responses: 15,
      category: "Connessioni"
    },
    {
      id: 3,
      title: "Piccole vittorie quotidiane",
      preview: "Oggi ho fatto qualcosa che tre mesi fa mi sembrava impossibile. Ho chiamato mia madre e le ho detto che...",
      author: "Sofia",
      timeAgo: "1 giorno fa",
      hugs: 8,
      responses: 6,
      category: "Famiglia"
    }
  ];

  const sendHug = (storyId: number, authorName: string) => {
    toast({
      title: "🤗 Abbraccio inviato!",
      description: `Il tuo abbraccio è stato inviato a ${authorName} con tutto il cuore.`,
    });
  };

  return (
    <section className="py-16 px-6 bg-gradient-soft">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-warm bg-clip-text text-transparent">Storie</span> che toccano il cuore
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ogni storia è un dono. Qui trovi persone che condividono pezzi autentici della loro vita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stories.map((story, index) => (
            <Card key={story.id} className="animate-fade-in hover:scale-105 transition-transform duration-300" style={{animationDelay: `${index * 0.15}s`}}>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">
                    {story.category}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-1" />
                    {story.timeAgo}
                  </div>
                </div>
                <CardTitle className="text-xl leading-tight">{story.title}</CardTitle>
                <CardDescription className="text-sm leading-relaxed line-clamp-3">
                  {story.preview}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <User className="h-4 w-4 mr-1" />
                    {story.author}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Heart className="h-4 w-4 mr-1" />
                      {story.hugs}
                    </div>
                    <div className="flex items-center">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      {story.responses}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button 
                    variant="hug" 
                    size="sm" 
                    className="flex-1"
                    onClick={() => sendHug(story.id, story.author)}
                  >
                    <Heart className="mr-1 h-4 w-4" />
                    Invia abbraccio
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1">
                    <MessageCircle className="mr-1 h-4 w-4" />
                    Rispondi
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <Button variant="warm" size="lg">
            <MessageCircle className="mr-2 h-5 w-5" />
            Condividi la tua storia
          </Button>
          <p className="text-sm text-muted-foreground">
            Le tue parole possono essere la luce di cui qualcuno ha bisogno oggi
          </p>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;