import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const advantages = [
    {
      title: "Рентабельно",
      description: "Ориентируем на увеличение прибыли ресторанов. Каждый рубль работает на результат.",
      icon: "DollarSign"
    },
    {
      title: "Платите за результат",
      description: "Не берем деньги за настройку рекламных площадок, оплачиваете только за КPI метрику.",
      icon: "Target"
    },
    {
      title: "Готовое решение",
      description: "За три тура мы быстро по алгоритмам приводим и не экспериментируем, как инди-команды.",
      icon: "Zap"
    },
    {
      title: "Узкая специализация",
      description: "Понимаем только рестораны. Поэтому понимаем специфику. Ценим клиентов сферы.",
      icon: "Users"
    },
    {
      title: "Глубоко погружаемся",
      description: "Прежде выявляем предполагаемую проблематику проекта более чем по 50 направлениям.",
      icon: "Search"
    },
    {
      title: "Прозрачная аналитика",
      description: "Считаем каждую из привлеченных гостей и активный среди трафиков частот до 7 дней.",
      icon: "BarChart3"
    }
  ];

  const services = [
    "Контекстная реклама",
    "Таргетированная реклама", 
    "SEO продвижение",
    "Разработка сайта",
    "SMM"
  ];

  const principles = [
    {
      title: "ПРАВДИВЫЕ НЕОФЛАМЕНТНЫ",
      description: "Как мы приводим прирост выручки не за счет пустых переходов и мира за и быстро.",
      color: "bg-purple-100"
    },
    {
      title: "БЕЗ СМЕРТНЫХ ПЛАТЕЖЕЙ",
      description: "Мы не вымогаем оплату за настройку/системы и трафика до получения первых заказов.",
      color: "bg-gray-100"
    },
    {
      title: "ПЕРСОНАЛЬНЫЙ ПОДХОД",
      description: "Подстраиваем наш сэмплы систематизации пула пользователей к специализации заведения.",
      color: "bg-yellow-100"
    },
    {
      title: "ГАРАНТИЯ РЕЗУЛЬТАТА",
      description: "Весь работаем в готовому результативному ТВ – поэтому гарантируем успех на лавинах.",
      color: "bg-green-100"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="px-6 py-4 text-center">
        <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">ПРОАППЕТИТ</span>
      </header>

      {/* Hero Section */}
      <section className="text-center px-6 py-16 max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold font-montserrat mb-4">
          Digital маркетинг<br />
          для ресторанов
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Полная посадка через 2 месяца
        </p>
        <Button className="bg-orange text-white hover:bg-orange/90 px-8 py-3 text-lg font-medium">
          Получить коммерческое предложение
        </Button>
      </section>

      {/* Advantages Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Почему мы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow animate-fade-in border-none shadow-sm">
              <CardContent className="p-0">
                <div className="mb-4">
                  <Icon name={advantage.icon} size={32} className="text-orange" />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-montserrat">{advantage.title}</h3>
                <p className="text-gray-600 leading-relaxed">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Cases Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Кейсы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="aspect-video border-2 border-gray-300 bg-gray-50 hover:shadow-md transition-shadow overflow-hidden">
            <CardContent className="p-0 h-full">
              <img 
                src="/img/0d6fdafb-c362-4b8a-91b2-ee38016b823e.jpg" 
                alt="Ресторан - интерьер и атмосфера" 
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
          <Card className="aspect-video border-2 border-gray-300 bg-gray-50 hover:shadow-md transition-shadow overflow-hidden">
            <CardContent className="p-0 h-full">
              <img 
                src="/img/e240076b-839e-4d7b-b200-31f2abe299e7.jpg" 
                alt="Аналитика и метрики ресторана" 
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
          <Card className="aspect-video border-2 border-gray-300 bg-gray-50 hover:shadow-md transition-shadow overflow-hidden">
            <CardContent className="p-0 h-full">
              <img 
                src="/img/281bc37a-fbc3-40ac-96b2-c51e671c85cf.jpg" 
                alt="Реклама в социальных сетях" 
                className="w-full h-full object-cover"
              />
            </CardContent>
          </Card>
          {[4, 5, 6].map((item) => (
            <Card key={item} className="aspect-video border-2 border-gray-300 bg-gray-50 hover:shadow-md transition-shadow">
              <CardContent className="p-8 h-full flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <Icon name="Image" size={48} />
                  <p className="mt-2 text-sm">Кейс #{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Услуги</h2>
        <div className="space-y-4">
          {services.map((service, index) => (
            <div key={index} className="border-2 border-gray-800 p-4 text-center font-medium text-lg hover:bg-gray-50 transition-colors">
              {service}
            </div>
          ))}
        </div>
      </section>

      {/* Principles Section */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">Принципы работы</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {principles.map((principle, index) => (
            <Card key={index} className={`p-6 ${principle.color} border-none hover:scale-105 transition-transform`}>
              <CardContent className="p-0">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <Icon name="Star" size={24} className="text-gray-800" />
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 font-montserrat">{principle.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{principle.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="px-6 py-16 text-center bg-gray-50">
        <h2 className="text-2xl font-bold mb-4 font-montserrat">Готовы увеличить прибыль ресторана?</h2>
        <p className="text-gray-600 mb-8">Оставьте заявку, и мы свяжемся с вами в течение часа</p>
        <Button className="bg-orange text-white hover:bg-orange/90 px-8 py-3 text-lg font-medium">
          Получить консультацию
        </Button>
      </footer>
    </div>
  );
};

export default Index;