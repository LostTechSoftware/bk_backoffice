import ParamError from '@errors/ParamError'

const block = function (): void {
  if (this.blocked) throw new ParamError('User already blocked')

  this.blocked = true
  this.save()
}

export default block
