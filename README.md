#### First run tailwindcss

```
npm install
npx tailwindcss -i input.css -o output.css

```

The generated output.css is below

```
.alert {
  --tw-bg-opacity: 1;
  background-color: rgb(254 242 242 / var(--tw-bg-opacity));
  &_title {
    --tw-bg-opacity: 1;
    background-color: rgb(241 245 249 / var(--tw-bg-opacity))
  }
}

```