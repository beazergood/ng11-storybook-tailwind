import { AppComponent } from './app.component';

export default {
  title: 'App Component'
}

export const primary = () => ({
  moduleMetadata: {
    imports: []
  },
  component: AppComponent,
  props: {
      header: 'Hey!!'
  }
})