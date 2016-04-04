class MammalsController < ApplicationController
  before_action do
    if params[:id]
      @mammal = Mammal.find(params[:id])
    end
  end

  def index
    @zoo = Zoo.find(params[:zoo_id])
    @mammals = @zoo.mammals
    respond_to do |format|
      format.html
      format.json{ render json: @mammals, status: :ok }
    end
  end

  def show
    render json: @mammal, status: :ok
  end

end
