Component({
  mixins: [],
  data: {},
  props: {
    item : []
  },
  didMount() {
    console.log(this.props.item, 'item')
  },
  didUpdate() {},
  didUnmount() {},
  methods: {},
});
