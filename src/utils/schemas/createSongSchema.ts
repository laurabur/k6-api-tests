export function createSongSchema() {
  const schema = {
    type: 'object',
    properties: {
      song: {
        type: 'object',
        properties: {
          item: {
            type: 'object'
          }
        }
      },
      title: {
        type: 'string'
      },
      activeCollaboratorCount: {
        type: 'number'
      },
      success: {
        type: 'boolean'
      }
    }
  }
  return schema
}
