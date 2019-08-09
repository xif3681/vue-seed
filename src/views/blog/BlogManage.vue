
<template>
  <div>
    <div>BlogAdding</div>
    <div>pieceCode： {{pieceCode}}</div>
  </div>
</template>
<script>
import { pieceAuditMixin } from "@/mixins";
export default {
  name: "PieceAudit",
  mixins: [pieceAuditMixin],
  data() {
    return {};
  }
};
</script>