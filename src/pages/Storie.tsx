import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MessageCircle, Clock, User, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Storie = () => {
  const { toast } = useToast();

  const stories = [
    {
      id: 1,
      title: "Il coraggio di ricominciare",
      preview: "Dopo anni di paura, ho deciso di lasciare un lavoro che mi faceva male. Non sapevo cosa aspettarmi, ma ho scoperto che il coraggio non è l'assenza di paura, ma la decisione che qualcos'altro è più importante della paura stessa. Oggi, sei mesi dopo, posso dire che è stata la decisione migliore della mia vita...",
      author: "Maria",
      timeAgo: "2 ore fa",
      hugs: 12,
      responses: 8,
      category: "Crescita"
    },
    {
      id: 2,
      title: "Quando l'amicizia salva",
      preview: "Stavo attraversando il periodo più buio della mia vita quando una chiamata inaspettata ha cambiato tutto. Era una vecchia amica che non sentivo da anni. Non so cosa l'abbia spinta a chiamarmi proprio quel giorno, ma le sue parole sono state come una luce nel tunnel. Mi ha ricordato chi sono veramente...",
      author: "Luca",
      timeAgo: "5 ore fa", 
      hugs: 23,
      responses: 15,
      category: "Connessioni"
    },
    {
      id: 3,
      title: "Piccole vittorie quotidiane",
      preview: "Oggi ho fatto qualcosa che tre mesi fa mi sembrava impossibile. Ho chiamato mia madre e le ho detto che la amo. Può sembrare semplice, ma per me rappresenta un mondo. Dopo anni di silenzio, di orgoglio ferito e di parole non dette, ho trovato il coraggio di fare il primo passo...",
      author: "Sofia",
      timeAgo: "1 giorno fa",
      hugs: 8,
      responses: 6,
      category: "Famiglia"
    },
    {
      id: 4,
      title: "La forza di dire no",
      preview: "Per tutta la vita ho detto sì a tutto e a tutti. Sì al lavoro extra, sì alle richieste impossibili, sì anche quando il mio corpo e la mia mente gridavano no. Fino a quando non ho imparato che dire no agli altri significa dire sì a me stessa. È stata una rivoluzione silenziosa ma potente...",
      author: "Elena",
      timeAgo: "2 giorni fa",
      hugs: 19,
      responses: 11,
      category: "Crescita"
    },
    {
      id: 5,
      title: "L'amore dopo i 60",
      preview: "Pensavo che l'amore fosse solo per i giovani. A 62 anni, dopo 30 anni di matrimonio finito, credevo che il mio capitolo romantico fosse chiuso. Poi ho incontrato Giuseppe al corso di tango. Non è stato colpo di fulmine, ma una dolce scoperta: il cuore non ha età...",
      author: "Carla",
      timeAgo: "3 giorni fa",
      hugs: 31,
      responses: 20,
      category: "Amore"
    },
    {
      id: 6,
      title: "Diventare madre single",
      preview: "Quando ho scoperto di essere incinta e lui se n'è andato, ho pensato che il mondo mi stesse crollando addosso. Avevo paura di non farcela da sola, di sbagliare tutto. Oggi, guardando mia figlia ridere, so che siamo una famiglia perfetta così come siamo. Non manca nulla...",
      author: "Giorgia",
      timeAgo: "1 settimana fa",
      hugs: 27,
      responses: 18,
      category: "Famiglia"
    }
  ];

  const sendHug = (storyId: number, authorName: string) => {
    toast({
      title: "🤗 Scarica l'app per inviare abbracci!",
      description: `Potrai inviare abbracci veri a ${authorName} e alle altre persone della community.`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-soft">
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
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-warm bg-clip-text text-transparent">Storie</span> che toccano il cuore
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Ogni storia è un dono. Qui trovi persone che condividono pezzi autentici della loro vita.
          </p>
          <Button variant="warm" size="lg">
            <Download className="mr-2 h-5 w-5" />
            Scarica l'app per condividere la tua storia
          </Button>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
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
                  <CardDescription className="text-sm leading-relaxed">
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
                      Leggi tutto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center space-y-4">
            <Button variant="warm" size="lg">
              <MessageCircle className="mr-2 h-5 w-5" />
              Condividi la tua storia con l'app
            </Button>
            <p className="text-sm text-muted-foreground">
              Le tue parole possono essere la luce di cui qualcuno ha bisogno oggi
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">
            Pronto a condividere la tua <span className="bg-gradient-warm bg-clip-text text-transparent">storia</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Nella community di mio aiuto per te, ogni storia è accolta con amore e rispetto. 
            Scarica l'app per unirti a noi.
          </p>
          <Button variant="warm" size="hero">
            <Download className="mr-2 h-6 w-6" />
            Scarica mio aiuto per te
          </Button>
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

export default Storie;