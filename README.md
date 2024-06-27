# Super Web - სათამაშოების ონლაინ მაღაზია
პროექტი შეიცავს "TBC x USAID"-ის პარტნიორობის ფარგლებში ჩატარებული React-ის კურსის ფინალურ პროექტს.
Super Web App-ი არის ონლაინ მაღაზია, რომელიც მომხმარებელს სთავაზობს სხვადასხვა კატეგორიის სათამაშოებს ლამაზ და სახალისო UI-ზე.

<b>დემო: </b> <a href="https://tbc-x-usaid-project-app.vercel.app/">https://tbc-x-usaid-project-app.vercel.app/</a>

## პროექტის ტექნიკური დეტალები

პროექტის Front და Back დაწერილია <b>Next.js</b> 14-ზე, დაჰოსტილია <b>Vercel</b>-ზე

გამოყენებულია ცნობილი Javascript-ის ბიბლიოთეკები:
- <b>Typed.js</b> - ინტერაქტიული ტექსისთვის
- <b>Swiper.js</b> - Slider-ი კატეგორიებისთვის
- <b>Particles.js</b> - ბექგრაუნდში პატარა SuperMan-ების ანიმაციისათვის
- <b>leaflet.js</b> - კურიერის ადგილმდებარეობის მონიტორინგისთვის Map-ის ინტეგრაცია
- <b>MUI Icon</b> - ლამაზი და რესპონსული icon-ებისთვის
- <b>countUp.js</b> - Cart-ში ჯამური ღირებულების თანხის გაზრდის ანიმაცია


## ლოკალურად გამართვა
ლოკალურად გასაშვებად, საჭიროა:

1. **და-clone-ოთ რეპოზიტორია**:

```console
git clone https://github.com/Dadu400/tbc-x-usaid-project-app.git
```

2. **შეხვიდეთ tbc-x-usaid-project-app ფოლდერში**:

```console
cd ./tbc-x-usaid-project-app
```

3. **დააინსტალიროთ საჭირო dependency-ები**:
```console
npm install
```

4. **შექმნათ `.env.local` და `.env.development.local` ფაილები სენსიტიური მონაცემებისათვის**
5. **გაწეროთ საჭირო პარამეტრები, ზემოთ მოცემულ .env ფაილებში:**
```yml
BLOB_READ_WRITE_TOKEN=""
NX_DAEMON=""
POSTGRES_DATABASE=""
POSTGRES_HOST=""
POSTGRES_PASSWORD=""
POSTGRES_PRISMA_URL=""
POSTGRES_URL=""
POSTGRES_URL_NON_POOLING=""
POSTGRES_URL_NO_SSL=""
POSTGRES_USER=""
VERCEL=""
VERCEL_ENV=""
NEXT_PUBLIC_VERCEL_URL=""
BACKEND_URL=""
NEXTAUTH_URL=""
JWT_SECRET=""
STRIPE_SECRET_KEY=""
```
6. **გაუშვით აპლიკაცია შემდეგი კომანდით**:
```console
npm run dev
```
