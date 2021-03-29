export class DOMListener {
  constructor($root) {
    if (!$root) throw new Error('Root element is not provided for DOMListener');
    this.$root = $root;
  }
}
